import { getHoursAndMinutesFromTime, getTimeInSeconds, getCurrentTime } from '../utils/timeFunctions';
import { DELETE_TASK } from './tasksReducer';


const ADD_NOTIFICATION = 'notifications/ADD_NOTIFICATION'
const DELETE_NOTIFICATION = 'notifications/DELETE_NOTIFICATION'
const ADD_TIMER = 'notifications/ADD_TIMER'
const UPDATE_TIMER = 'notifications/UPDATE_TIMER'

const initialState = {
    notifications: [],
    timers: [],
};

const notificationReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case ADD_NOTIFICATION:
            return {
                ...state,
                notifications: [action.payload, ...state.notifications]
            }

        case DELETE_NOTIFICATION:
            return {
                ...state,
                notifications: state.notifications.filter(note => note.noteType + note.id !== action.noteType + action.id),
                timers: state.timers.filter(timer => timer.timerType + timer.timerId !== action.noteType + action.id ),
            }

        case DELETE_TASK:
            return {
                ...state,
                notifications: state.notifications.filter(note => note.id !== action.id),
                timers: state.timers.filter(timer => timer.taskId !== action.id ),
            }


        case ADD_TIMER:
            return {
                ...state,
                timers: [
                    ...state.timers,
                    {
                        taskId: action.taskId,
                        timerId: action.timerId,
                        timerType: action.timerType,
                    }
                ]
            }
        case UPDATE_TIMER: 
            return {
                ...state,
                timers: state.timers.filter(timer => timer.timerType + timer.taskId !==  action.timerType + action.taskId)
            }

        default:
            return state;
    }
}

export const addNotification = (payload) => {
    return {
        type: ADD_NOTIFICATION,
        payload
    }
}

export const removeNotification = (id, noteType) => {
    return {
        type: DELETE_NOTIFICATION,
        id,
        noteType
    }
}

export const addTimer = (taskId, timerId, timerType) => {
    return {
        type: ADD_TIMER,
        taskId,
        timerId,
        timerType
    }
}

export const updateTimer = (taskId, timerType) => {
    return {
        type: UPDATE_TIMER,
        taskId,
        timerType,
    }
}






export const setNotifications = (tasksForDay) => (dispatch, getState) => {

    const timers = getState().notificationsPage.timers;

    const currentTimeInSeconds = getCurrentTime();

    tasksForDay.forEach(task => {

        const timersForThisTask = timers.filter(timer => timer.taskId === task.id);

        const taskStartTimeTimer = timersForThisTask.find(timer => timer.timerType === "taskStart")
        const taskRemindTimeTimer = timersForThisTask.find(timer => timer.timerType === "taskRemind")

        const notificationObject = {
            id: task.id,
            text: task.text,
            startTime: task.startTime,
            endTime: task.endTime
        }

         // время старта таски
         const [taskHours, taskMinutes] = getHoursAndMinutesFromTime(task.startTime)

         // время в секундах
         const taskStartTime = getTimeInSeconds(taskHours, taskMinutes);


        // ставим напоминание за какое-то время
        if(!taskRemindTimeTimer){
             
            // время напоминания о таске
             const [remindHours, remindMinutes] = getHoursAndMinutesFromTime(task.remindTime);

             // время в секундах
            const remindTime = getTimeInSeconds(remindHours, remindMinutes);

            const remindAboutTaskStartTime = taskStartTime - remindTime - currentTimeInSeconds;

            if (remindAboutTaskStartTime >= 0 && remindTime) {

                const noteType = "taskRemind";

                dispatch(addTimerAndNotificationTC(task.id, {...notificationObject, noteType}, remindAboutTaskStartTime, noteType))
            }
        }

        // ставим напоминание о начале задачи 
        if (!taskStartTimeTimer) {
            
            const remindAboutTaskStart = taskStartTime - currentTimeInSeconds;

            if (remindAboutTaskStart >= 0) {

                const noteType = "taskStart";

                dispatch(addTimerAndNotificationTC(task.id, {...notificationObject, noteType}, remindAboutTaskStart, noteType))

            }
        }
    })

}

const addTimerAndNotificationTC = (taskId, notification, delay, noteType) => (dispatch) => {

    const taskReminder = setTimeout(() => {

        dispatch(addNotification({...notification, noteType } ));

    }, delay * 1000);

    dispatch(addTimer(taskId, taskReminder, noteType));
}


export const updateTimerTC = (taskId, timerId, timerType) => (dispatch) =>  {
    
    clearTimeout(timerId); 
    dispatch(updateTimer(taskId, timerType));

}


export default notificationReducer;