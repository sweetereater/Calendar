import s from './DateManager.module.css';
import { NavLink, withRouter } from 'react-router-dom';

import { CloseOutlined } from '@ant-design/icons';
import { months } from '../../redux/mainReducer';
import { createNewTaskInLC, changeNewTaskEndTime, changeNewTaskRemindTime, changeNewTaskStartTime, changeNewTaskText, showPanel } from '../../redux/tasksReducer';

import { useDispatch, useSelector } from 'react-redux';
import TaskItem from './TaskItem/TaskItem';

import { getCurrentTime, getTimeInSeconds, getHoursAndMinutesFromTime } from '../../redux/notificationReducer';


function DateManager(props) {

    const routerParams = props.match.params;

    const fullDate = routerParams.dateValue;
    const [year, month, date] = fullDate.split('-');

    //getting all data from state
    const tasksState = useSelector(state => state.tasksPage);
    const tasks = tasksState.tasks;
    const tasksForThisDay = tasks[fullDate];

    // newTask properties
    const taskText = tasksState.newTaskText;
    const taskStartTime = tasksState.newTaskStartTime;
    const taskEndTime = tasksState.newTaskEndTime;
    const taskRemindTime = tasksState.newTaskRemindTime;

    //panel for succesfull addNewTask
    const isVisible = tasksState.isPanelVisible;

    const monthName = months.find(monthItem => monthItem.number === Number(month)).title;

    const dispatch = useDispatch();

    const handleNewTaskTextChange = (event) => {
        dispatch(changeNewTaskText(event.target.value));
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            addNewTask();
        }

    }

    const updateStartTime = (event) => {
        dispatch(changeNewTaskStartTime(event.target.value));
    }

    const updateEndTime = (event) => {
        dispatch(changeNewTaskEndTime(event.target.value));
    }

    const updateRemindTime = (event) => {
        dispatch(changeNewTaskRemindTime(event.target.value));
    }

    const addNewTask = () => {

        const curTime = getCurrentTime();
        const taskStartTimeInSeconds = getTimeInSeconds(...getHoursAndMinutesFromTime(taskStartTime))
        const taskEndTimeInSeconds = getTimeInSeconds(...getHoursAndMinutesFromTime(taskEndTime))
        const taskRemindTimeInSeconds = getTimeInSeconds(...getHoursAndMinutesFromTime(taskRemindTime))

        const isValidRemindTime = taskStartTimeInSeconds > (curTime + taskRemindTimeInSeconds);

        if (taskText && isValidRemindTime && taskEndTimeInSeconds > taskStartTimeInSeconds) {
            dispatch(createNewTaskInLC(fullDate));
            dispatch(changeNewTaskText(''));
            dispatch(showPanel(true));
            setTimeout(() => {
                dispatch(showPanel(false));
            }, 1000)
        }
    }

    return (
        <div className={s.dateManagerContainer}>
            <NavLink className={s.closingDateManagerContainer} to='/'> <CloseOutlined /> </NavLink>

            <div className={s.dateManager}>

                {/* Панель, соообщающая о успешном добавлении задачи */}
                {isVisible && <div className={s.successfullPanel}>Событие добавлено!</div>}

                <h1 className={s.currentDate}>{date} {monthName} {year}</h1>

                <div className={s.tasks} onKeyDown={handleKeyDown}>
                    <div className={s.dataEntry}>
                        <input placeholder="Новая задача" className={s.taskInput} value={taskText} onChange={handleNewTaskTextChange} />

                        <div className={s.inputContainer}>
                            <label htmlFor="startTime"> Начало </label>
                            <input id="startTime" className={s.taskInput} value={taskStartTime} onChange={updateStartTime} type="time" />
                        </div>

                        <div className={s.inputContainer}>
                            <label htmlFor="endTime"> Конец </label>
                            <input id="endTime" className={s.taskInput} value={taskEndTime} onChange={updateEndTime} type="time" />
                        </div>

                        <div className={s.inputContainer}>
                            <label htmlFor="remindTime"> Напомнить за </label>
                            <input id="remindTime" className={s.taskInput} value={taskRemindTime} onChange={updateRemindTime} type="time" />
                        </div>
                    </div>

                    <button onClick={addNewTask} className={s.addNewTask}>Создать новую задачу</button>

                    {/*  Отображаем все задачи на текущую дату */}
                    <>
                        <h1>Текущие цели:</h1>
                        {tasksForThisDay && tasksForThisDay.map(task => <TaskItem key={task.id} fullDate={fullDate} taskData={task} />)}
                    </>
                </div>

            </div>

        </div>
    )

}

export default withRouter(DateManager);