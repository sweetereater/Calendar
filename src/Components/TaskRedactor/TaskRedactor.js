import s from './TaskRedactor.module.css';
import { useState } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CloseOutlined } from '@ant-design/icons'
import { updateTaskInLC } from '../../redux/tasksReducer';
import { updateTimerTC } from '../../redux/notificationReducer';
import TaskInput from '../TaskInput/TaskInput';

function TaskRedactor(props) {

    const { dateValue, id } = props.match.params;

    // task for update
    const task = useSelector(state => state.tasksPage.tasks[dateValue].find(task => task.id === id));

    // Timeout for that task
    const taskTimers = useSelector(state => state.notificationsPage.timers).filter(timer => timer.taskId === id);

    const dispatch = useDispatch();

    const [text, setEditText] = useState(task.text);
    const [startTime, setStartTime] = useState(task.startTime);
    const [endTime, setEndTime] = useState(task.endTime);
    const [remindTime, setRemindTime] = useState(task.remindTime);

    const handleChangeValue = (e, func) => {
        func(e.target.value)
    }

    const handleClick = () => {

        if (text && startTime && endTime) {
            dispatch(updateTaskInLC(dateValue, id, text, startTime, endTime, remindTime));
        }

        if (startTime !== task.startTime) {
            const taskStartTimerId = taskTimers.find(timer => timer.timerType === "taskStart")
            if (taskStartTimerId) dispatch(updateTimerTC(id, taskStartTimerId.timerId, "taskStart"))

        }

        if (remindTime !== task.remindTime) {
            const taskReminderTimerId = taskTimers.find(timer => timer.timerType === "taskRemind")
            if (taskReminderTimerId) dispatch(updateTimerTC(id, taskReminderTimerId.timerId, "taskRemind"))
        }

    }


    return (
        <div>
            <div className={s.backdrop}></div>
            <div className={s.taskRedactorContainer}>
                <NavLink to={`/date/${dateValue}`} className={s.closingTaskRedactor}> <CloseOutlined /> </NavLink>
                <h1>Редактирование задачи</h1>

                <input className={s.taskInput} value={text} onChange={(e) => handleChangeValue(e, setEditText)} />

                <TaskInput
                    containerClassName={s.taskContainer}
                    label="Начало"
                    inputId="changeStartTime"
                    value={startTime}
                    handleChange={(e) => handleChangeValue(e, setStartTime)}
                />

                <TaskInput
                    containerClassName={s.taskContainer}
                    label="Конец"
                    inputId="changeEndTime"
                    value={endTime}
                    handleChange={(e) => handleChangeValue(e, setEndTime)}
                />

                <TaskInput
                    containerClassName={s.taskContainer}
                    label="Напомнить за"
                    inputId="changeRemindTime"
                    value={remindTime}
                    handleChange={(e) => handleChangeValue(e, setRemindTime)}
                />

                <NavLink className={s.successOnEdit} onClick={handleClick} to={`/date/${dateValue}`}> OK </NavLink>

            </div>
        </div>
    )
}

export default withRouter(TaskRedactor);