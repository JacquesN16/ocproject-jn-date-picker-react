const dateFns = require('date-fns')


const getDaysByWeek = (days = []) => {
    const DAYS_IN_WEEK = 7;
    const result = [];
    let weekOfDays = [];

    days.forEach(day => {
        if (weekOfDays.length === DAYS_IN_WEEK) {
            result.push(weekOfDays);
            weekOfDays = [];
        }

        weekOfDays.push(day);
    });

    result.push(weekOfDays);
    return result;
};

const getDaysForCalendar = (date = new Date(), calendarSize = 42) => {
    const visibleCalendarDays = [];
    const monthStartDate = dateFns.startOfMonth(date);
    const monthEndDate = dateFns.endOfMonth(date);
    const monthStartDayOfWeek = monthStartDate.getDay();
    const daysInMonth = dateFns.getDaysInMonth(date);
    const numOfDaysToAddBefore = monthStartDayOfWeek - 1;
    const calendarStartDate = dateFns.subDays(
        monthStartDate,
        numOfDaysToAddBefore
    );
    const calendarEndDate = dateFns.addDays(
        monthEndDate,
        calendarSize - daysInMonth - numOfDaysToAddBefore
    );
    const interval = {start:calendarStartDate, end:calendarEndDate}
    dateFns
        .eachDayOfInterval(interval)
        .forEach(date => visibleCalendarDays.push(date));

    return visibleCalendarDays;
};
const getMonthAsWord = date => date.toString().split(' ')[1];


module.exports = {
    getMonthAsWord,
    getDaysForCalendar,
    getDaysByWeek
}