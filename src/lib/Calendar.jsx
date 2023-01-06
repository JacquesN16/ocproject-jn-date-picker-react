import React from "react";
import {
    getMonthAsWord,
    getDaysForCalendar,
    getDaysByWeek
} from './helper'
import classNames from "classnames";
import * as dateFns from 'date-fns'
import './style.scss'

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: props.date };
    }

    addMonth = () => this.setState({ date: dateFns.addMonths(this.state.date, 1) });
    subMonth = () => this.setState({ date: dateFns.subMonths(this.state.date, 1) });
    addYear = () => this.setState({ date: dateFns.addYears(this.state.date, 1 ) });
    subYear = () => this.setState({ date: dateFns.subYears(this.state.date, 1 ) });
    showCurrentDate = () => this.setState({ date: new Date() });

    renderControls() {
        const { date } = this.state;
        return (
            <div className="calendar__controls-row">
                <div className="calendar__controls">
                    <i className="fas fa-angle-left" onClick={this.subMonth}></i>
                    <i className="fas fa-angle-double-left" onClick={this.subYear}></i>
                </div>
                <div
                    className="calendar__month-with-year"
                    onClick={this.showCurrentDate}
                >
                    {getMonthAsWord(date)}{' '}{date.getFullYear()}
                </div>
                <div className="calendar__controls">
                    <i className="fas fa-angle-double-right" onClick={this.addYear}></i>
                    <i className="fas fa-angle-right" onClick={this.addMonth}></i>
                </div>
            </div>
        );
    }

    renderDaysOfWeek() {
        return (
            <div className="calendar__days-of-week">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((letter, i) => (
                    <div className="calendar__day-of-week" key={i}>{letter}</div>
                ))}
            </div>
        );
    }

    renderDate(date) {
        return (
            <div
                className={classNames(
                    'calendar__day',
                    {
                        'calendar__day--pale': !dateFns.isSameMonth(date, this.state.date),
                        'calendar__day--emphasize': dateFns.isToday(date)
                    }
                )}
                onClick={() => this.props.onDatePick(date)}
                key={date}
            >
                {date.getDate()}
            </div>
        );
    }

    render() {
        const weeksWithDaysInside = getDaysByWeek(getDaysForCalendar(this.state.date));

        return (
            <div className={classNames('calendar', this.props.className)}>
                {this.renderControls()}
                {this.renderDaysOfWeek()}
                {weeksWithDaysInside.map((week, i) => (
                    <div className="calendar__week" key={i}>
                        {week.map(this.renderDate, this)}
                    </div>
                ))}
            </div>
        );
    }
}

export default Calendar