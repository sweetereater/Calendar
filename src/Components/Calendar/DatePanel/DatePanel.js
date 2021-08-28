import s from './DatePanel.module.css';
import DateSelect from "./DateSelect/DateSelect";
import { useSelector, useDispatch } from 'react-redux';
import { years, months, setYear, setMonth } from "../../../redux/mainReducer";



function DatePanel() {

    const { year, month } = useSelector(state => state.calendarPage)

    const dispatch = useDispatch();

    const changeYear = (value) => dispatch(setYear(value))
    const changeMonth = (value) => dispatch(setMonth(value))


    return (
        <div className={s.datePanel}>
            <DateSelect value={year} onChange={changeYear} items={years} />
            <DateSelect value={month} onChange={changeMonth} items={months} />
        </div>
    )
}

export default DatePanel;