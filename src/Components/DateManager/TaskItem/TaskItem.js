import React from 'react';
import s from './TaskItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTaskFromLC } from '../../../redux/tasksReducer';
import { NavLink } from 'react-router-dom';


function TaskItem(props) {

    const fullDate = props.fullDate;

    const {
        id,
        text,
        startTime,
        endTime,
    } = props.taskData;

    const taskTimeouts = useSelector(state => state.notificationsPage.timers).filter(timer => timer.taskId === id);

    const dispatch = useDispatch();

    const handleDeleteTask = (date, id) => {

        if (taskTimeouts) {
            taskTimeouts.forEach(timer => clearTimeout(timer.timerId));
        }

        dispatch(deleteTaskFromLC(date, id))
    }

    return (
        <div className={s.taskItem}>
            <div className={s.taskInfo}>
                <p>{text}</p>
                <p>c {startTime} до {endTime}</p>
            </div>
            <div className={s.taskButtons}>
                <NavLink to={`/date/${fullDate}/edit/${id}`}><button>Редактировать</button></NavLink>
                <button onClick={() => handleDeleteTask(fullDate, id)}>Удалить</button>
            </div>

        </div>
    )
}

export default React.memo(TaskItem);