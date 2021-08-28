import { useSelector } from "react-redux";
import s from './MonthTable.module.css';
import Day from './Day/Day';


function MonthTable() {

    const days = useSelector(state => state.calendarPage.days);

    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    return (
        <div className={s.gridTable}>
            {
                weekDays.map((weekDay, i) => <div className={s.weekDayName} key={i}>{weekDay}</div>)
            }
            {
                days.map((day, i) => <Day key={i} data={day} />)
            }

        </div>
    )
}

export default MonthTable;