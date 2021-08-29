import s from './Notifications.module.css';
import { CloseOutlined } from '@ant-design/icons';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNotifications } from '../../redux/notificationReducer';
import { removeNotification } from '../../redux/notificationReducer';

function Notifications() {

    const notifications = useSelector(state => state.notificationsPage.notifications);

    const { currentYear, currentMonth, currentDay } = useSelector(state => state.calendarPage);
    const fullCurrentDate = `${currentYear}-${currentMonth}-${currentDay}`;
    const allTasks = useSelector(state => state.tasksPage.tasks);
    const tasksForCurDay = allTasks[fullCurrentDate] || [];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNotifications(tasksForCurDay))
    }, [tasksForCurDay])


    return (
        <div className={s.notificationsContainer}>
            {
                notifications.length > 0 && notifications.map(note => {
                    return <Notification 
                            key={`${note.noteType}-${note.id}`} 
                            noteId={note.id}
                            noteType={note.noteType}
                            text={note.text} 
                            startTime={note.startTime} 
                            endTime={note.endTime} />
                })
            }
        </div>
    )
}

export default Notifications;



function Notification(props) {

    const dispatch = useDispatch();

    const head = props.noteType === "taskRemind" ? "Напоминание" : "Напоминание о начале события"

    const handleClick = (noteId) => {
        dispatch(removeNotification(noteId, props.noteType))
    }

    return (
        <div className={s.notification}>
            <button onClick={() => handleClick(props.noteId)} className={s.closeNotification} to='/'> <CloseOutlined /> </button>
            <h3>{head}</h3>
            <p>У вас запланировано "{props.text}" с {props.startTime} до {props.endTime}</p>
        </div>
    )
}
