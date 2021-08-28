import s from "./Calendar.module.css";

import DatePanel from "./DatePanel/DatePanel";
import MonthTable from "./MonthTable/MonthTable";

function Calendar() {

    return (
        <div className={s.container}>
            <DatePanel />
            <MonthTable />
        </div>
    )
}

export default Calendar;