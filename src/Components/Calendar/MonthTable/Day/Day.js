import { NavLink } from 'react-router-dom';
import s from './Day.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadTaskFromLC } from '../../../../redux/tasksReducer';

function Day(props) {

    const dispatch = useDispatch();
    const { year, month, currentDay } = useSelector(state => state.calendarPage)
    const { curMonth, date } = props.data;

    const currentFullDate = `${year}-${curMonth}-${date}`


    // Getting tasks for this date
    const AllTasks = useSelector(state => state.tasksPage.tasks)
    const tasksForThisDay = AllTasks[currentFullDate] || [];

    //getting tasks from localStorage
    useEffect(() => {

        if (tasksForThisDay.length === 0) {
            dispatch(loadTaskFromLC(currentFullDate));
        }

    }, [currentFullDate]);


    // Styles for current month and others
    let dayContainerClasses = `${s.dayContainer}`
    let dateLinkClasses = `${s.dateLink}`
    if (curMonth !== month) {
        dateLinkClasses += ` ${s.disabledDateLink}`
    }

    const handleDateClick = (e, curMonth) => {
        if (curMonth !== month) e.preventDefault();
    }

    return (
        <div className={dayContainerClasses}>
            <NavLink onClick={(e) => handleDateClick(e, curMonth)} className={dateLinkClasses} to={`/date/${currentFullDate}`}>
                <span className={s.date}> {date} </span>

                {tasksForThisDay.length > 0 &&
                    tasksForThisDay.slice(0, 3).map(task => {

                        let taskText = task.text.length < 8 ? task.text : task.text.slice(0, 8) + '...';

                        return <div key={task.id} className={s.taskText}>
                            <span className={s.greenDot}></span>
                            <span>{taskText}</span>
                        </div>
                    })
                }
            </NavLink>
        </div >

    )
}

export default React.memo(Day);