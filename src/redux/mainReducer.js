import generateMonthData from './generateMonth';

// action types
const SET_YEAR = "calendar/SET_YEAR"
const SET_MONTH = "calendar/SET_MONTH"

// settings from initialValue
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const currentDay = currentDate.getDate();
const days = generateMonthData(year, month);


export const years = [
    { title: "2019", number: 2019 },
    { title: "2020", number: 2020 },
    { title: "2021", number: 2021 },
    { title: "2022", number: 2022 },
    { title: "2023", number: 2023 },
]

export const months = [
    { title: "Jan", number: 0 },
    { title: "Feb", number: 1 },
    { title: "Mar", number: 2 },
    { title: "Apr", number: 3 },
    { title: "May", number: 4 },
    { title: "Jun", number: 5 },
    { title: "Jul", number: 6 },
    { title: "Aug", number: 7 },
    { title: "Sep", number: 8 },
    { title: "Oct", number: 9 },
    { title: "Nov", number: 10 },
    { title: "Dec", number: 11 },
]


const initialState = {
    year,
    month,
    days,
    currentYear: year,
    currentMonth: month,
    currentDay
}


const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_YEAR:
            return { ...state, year: action.payload, days: generateMonthData(action.payload, state.month) }
        case SET_MONTH:
            return { ...state, month: action.payload, days: generateMonthData(state.year, action.payload) }
        default:
            return state
    }
}

export const setYear = (year) => {
    return {
        type: SET_YEAR,
        payload: year
    }
}

export const setMonth = (month) => {
    return {
        type: SET_MONTH,
        payload: month
    }
}


export default mainReducer;