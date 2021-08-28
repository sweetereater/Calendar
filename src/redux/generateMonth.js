
export default function generateMonthData(year, month) {

    const allDays = [];

    const curMonth = new Date(year, month, 1);
    const day = curMonth.getDay();

    const monthLastDay = new Date(year, month + 1, 0).getDate();

    // get days from previous month
    if (day > 0) {
        const prevMonth = new Date(year, month, 0);
        const prevMonthLastDay = prevMonth.getDate();

        for (let start = prevMonthLastDay - day + 1; start <= prevMonthLastDay; start++) {
            allDays.push({
                curMonth: prevMonth.getMonth(),
                date: start,
            });
        }
    }

    // get days from current month
    for (let day = 1; day <= monthLastDay; day++) {
        allDays.push({
            curMonth: curMonth.getMonth(),
            date: day,
        })
    }

    // get days from next month
    if (allDays.length < 42) {
        const nextMonth = new Date(year, month + 1, 1).getMonth();
        for (let day = 1; allDays.length < 42; day++) {
            allDays.push({
                curMonth: nextMonth,
                date: day
            });
        }
    }

    return allDays;

}