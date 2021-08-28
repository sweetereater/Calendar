import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import mainReducer from "./mainReducer";
import tasksReducer from "./tasksReducer";
import notificationReducer from "./notificationReducer";

const rootReducer = combineReducers({
    calendarPage: mainReducer,
    tasksPage: tasksReducer,
    notificationsPage: notificationReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;