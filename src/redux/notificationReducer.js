import { getHoursAndMinutesFromTime, getTimeInSeconds, getCurrentTime } from '../utils/timeFunctions';



const ADD_NOTIFICATION = 'notifications/ADD_NOTIFICATION'
const DELETE_NOTIFICATION = 'notifications/DELETE_NOTIFICATION'
const ADD_TIMER = 'notifications/ADD_TIMER'

const initialState = {
    notifications: [],
    timers: [],
};

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_NOTIFICATION:
            return {
                ...state,
                notifications: [...state.notifications, action.payload]
            }

        case DELETE_NOTIFICATION:
            return {
                ...state,
                notifications: state.notifications.filter(note => note.id !== action.id),
                timers: state.timers.filter(timer => timer.timerId !== action.id)
            }

        case ADD_TIMER:
            return {
                ...state,
                timers: [
                    ...state.timers,
                    {
                        taskId: action.taskId,
                        timerId: action.timerId
                    }
                ]
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

export const removeNotification = (id) => {
    return {
        type: DELETE_NOTIFICATION,
        id
    }
}

export const addTimer = (taskId, timerId) => {
    return {
        type: ADD_TIMER,
        taskId,
        timerId
    }
}







export const setNotifications = (tasksForDay) => (dispatch, getState) => {

    const state = getState().notificationsPage.timers;

    const currentTimeInSeconds = getCurrentTime();

    tasksForDay.forEach(task => {

        if (!state.find(timer => timer.taskId === task.id)) {

            // время старта таски
            const [taskHours, taskMinutes] = getHoursAndMinutesFromTime(task.startTime)

            // время напоминания о ней
            const [remindHours, remindMinutes] = getHoursAndMinutesFromTime(task.remindTime);

            // время в секундах
            const taskStartTime = getTimeInSeconds(taskHours, taskMinutes);
            const remindTime = getTimeInSeconds(remindHours, remindMinutes);

            const delay = taskStartTime - remindTime - currentTimeInSeconds;

            if (delay >= 0) {
                const taskReminder = setTimeout(() => {

                    dispatch(addNotification(notificationObject));
                    // setTimeout(() => {
                    //     dispatch(removeNotification(task.id));
                    // }, 10000)

                }, delay * 1000);

                dispatch(addTimer(task.id, taskReminder));

                const notificationObject = {
                    id: task.id,
                    text: task.text,
                    startTime: task.startTime,
                    endTime: task.endTime
                }
            }


        }

    })

}


export default notificationReducer;