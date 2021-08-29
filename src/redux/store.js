import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import calendarReducer from "./calendarReducer";
import tasksReducer from "./tasksReducer";
import notificationReducer from "./notificationReducer";

const rootReducer = combineReducers({
    calendarPage: calendarReducer,
    tasksPage: tasksReducer,
    notificationsPage: notificationReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;