import React from "react";
import Calendar from "./Calendar"
import * as dateFns from 'date-fns'
import './style.scss'

class DatePicker extends React.Component {
    static defaultProps = {
        dateFormat: 'dd.MM.yyyy'
    };
    constructor() {
        super();
        this.state = {
            isCalendarOpen: false,
            selectedDate: null
        };
    }

    handleClick = (
        event
    ) => {
        event.preventDefault();
        event.target.blur();
        this.setState({ isCalendarOpen: !this.state.isCalendarOpen });
    };

    handleDatePick = (
        date
    ) => {
        this.setState({
            isCalendarOpen: false,
            selectedDate: date
        });
        this.props.onDatePick(date);
    };

    handleClear = (e) =>{
        e.stopPropagation()
        this.setState({
            isCalendarOpen: false,
            selectedDate: ""
        })
        this.props.onDatePick("");
    }

    render() {
        const { onDatePick, dateFormat } = this.props;
        const { isCalendarOpen, selectedDate } = this.state;

        return (
            <div
                className="date-picker"
                style={{color: this.props.color ? this.props.color : '#000'}}
            >
                <div className="date-picker__date-selection" onClick={this.handleClick}>
                    <input
                        className="date-picker__input"
                        type="text"
                        placeholder="Select Date"
                        value={selectedDate && dateFns.format(selectedDate, dateFormat)}
                    />
                    <button
                        aria-label='delete item'
                        onClick={this.handleClear} type='button'>X</button>
                </div>
                {isCalendarOpen &&
                    <Calendar
                        className="date-picker__calendar"
                        date={selectedDate || new Date()}
                        onDatePick={this.handleDatePick}
                        background={this.props.background}
                        altBackground={this.props.altBackground}
                    />
                }
            </div>
        );
    }
}

export default DatePicker
