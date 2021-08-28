import { v1 } from "uuid";

const CHANGE_NEW_TASK_TEXT = 'tasks/CHANGE_NEW_TASK_TEXT';
const CHANGE_NEW_TASK_START_TIME = 'tasks/CHANGE_NEW_TASK_START_TIME';
const CHANGE_NEW_TASK_END_TIME = 'tasks/CHANGE_NEW_TASK_END_TIME';
const CHANGE_NEW_TASK_REMIND_TIME = 'tasks/CHANGE_NEW_TASK_REMIND_TIME';
export const CREATE_NEW_TASK = 'tasks/CREATE_NEW_TASK';
const DELETE_TASK = 'tasks/DELETE_TASK';
const UPDATE_TASK = 'tasks/UPDATE_TASK';
const SHOW_SUCCESSFUL_PANEL = 'tasks/SHOW_SUCCESSFUL_PANEL'
const LOAD_TASKS_FROM_LC = 'tasks/LOAD_TASKS_FROM_LC'

const initialState = {
    newTaskText: '',
    newTaskStartTime: '10:00',
    newTaskEndTime: '11:00',
    newTaskRemindTime: '00:00',
    tasks: {

    },
    isPanelVisible: false
}

const sortByTaskStartTime = (tasks) => {
    return tasks.sort((val, val_) => val.startTime > val_.startTime ? 1 : -1);
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_NEW_TASK_TEXT:
            return { ...state, newTaskText: action.text }

        case CHANGE_NEW_TASK_START_TIME:
            return { ...state, newTaskStartTime: action.startTime }

        case CHANGE_NEW_TASK_END_TIME:
            return { ...state, newTaskEndTime: action.endTime }

        case CHANGE_NEW_TASK_REMIND_TIME:
            return { ...state, newTaskRemindTime: action.remindTime }

        case CREATE_NEW_TASK:

            const currentDayTasks = state.tasks[action.date] || [];

            const sortedDayTasks = sortByTaskStartTime([...currentDayTasks, action.newTask])

            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    [action.date]: sortedDayTasks
                }
            }


        case DELETE_TASK:
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    [action.date]: state.tasks[action.date].filter(task => task.id !== action.id)
                }
            }

        case SHOW_SUCCESSFUL_PANEL:
            return { ...state, isPanelVisible: action.visible }


        case UPDATE_TASK:
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    [action.date]: sortByTaskStartTime(state.tasks[action.date].map(task => {
                        return task.id === action.id ? { ...task, ...action.payload } : task;
                    }))
                }
            };

        case LOAD_TASKS_FROM_LC:
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    [action.date]: sortByTaskStartTime(action.tasks)
                }
            }

        default:
            return state;

    }
}


export const changeNewTaskText = (text) => {
    return {
        type: CHANGE_NEW_TASK_TEXT,
        text
    }
}

export const changeNewTaskStartTime = (startTime) => {
    return {
        type: CHANGE_NEW_TASK_START_TIME,
        startTime
    }
}

export const changeNewTaskEndTime = (endTime) => {
    return {
        type: CHANGE_NEW_TASK_END_TIME,
        endTime
    }
}

export const changeNewTaskRemindTime = (remindTime) => {
    return {
        type: CHANGE_NEW_TASK_REMIND_TIME,
        remindTime
    }
}


export const createNewTask = (date, newTask) => {
    return {
        type: CREATE_NEW_TASK,
        date,
        newTask
    }
}

export const deleteTask = (date, id) => {
    return {
        type: DELETE_TASK,
        date,
        id
    }
}

export const showPanel = (visible) => {
    return {
        type: SHOW_SUCCESSFUL_PANEL,
        visible
    }
}

export const updateTask = (date, id, text, startTime, endTime, remindTime) => {
    return {
        type: UPDATE_TASK,
        date,
        id,
        payload: {
            text, startTime, endTime, remindTime
        }
    }
}


export const loadTaskFromLocalStorage = (date, tasks) => {
    return {
        type: LOAD_TASKS_FROM_LC,
        date,
        tasks
    }
}


export const loadTaskFromLC = (date) => (dispatch) => {

    const tasks = localStorage.getItem(date);

    if (tasks) {
        const tasksArray = JSON.parse(tasks);

        if (tasksArray.length > 0) dispatch(loadTaskFromLocalStorage(date, tasksArray));
    }
}

export const createNewTaskInLC = (date) => (dispatch, getState) => {

    const state = getState().tasksPage;

    const newTask = {
        id: v1(),
        text: state.newTaskText,
        startTime: state.newTaskStartTime,
        endTime: state.newTaskEndTime,
        remindTime: state.newTaskRemindTime
    }

    let tasks = localStorage.getItem(date);
    tasks = tasks ? JSON.parse(tasks) : [];

    localStorage.setItem(date, JSON.stringify([...tasks, newTask]))

    dispatch(createNewTask(date, newTask))
}

export const deleteTaskFromLC = (date, taskId) => (dispatch) => {

    const tasks = JSON.parse(localStorage.getItem(date));
    const newTasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem(date, JSON.stringify(newTasks));

    dispatch(deleteTask(date, taskId));
}

export const updateTaskInLC = (date, id, text, startTime, endTime, remindTime) => (dispatch) => {

    const tasks = JSON.parse(localStorage.getItem(date));
    const newTasks = tasks.map(task => task.id === id ? { ...task, text, startTime, endTime, remindTime } : task);
    localStorage.setItem(date, JSON.stringify(newTasks));

    dispatch(updateTask(date, id, text, startTime, endTime, remindTime));
}




export default tasksReducer;