import React from "react";
import Calendar from "./Calendar";
import * as dateFns from 'date-fns';
import './style.scss';
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
  handleClick = event => {
    event.preventDefault();
    event.target.blur();
    this.setState({
      isCalendarOpen: !this.state.isCalendarOpen
    });
  };
  handleDatePick = date => {
    this.setState({
      isCalendarOpen: false,
      selectedDate: date
    });
    this.props.onDatePick(date);
  };
  render() {
    const {
      onDatePick,
      dateFormat
    } = this.props;
    const {
      isCalendarOpen,
      selectedDate
    } = this.state;
    return /*#__PURE__*/React.createElement("div", {
      className: "date-picker"
    }, /*#__PURE__*/React.createElement("div", {
      className: "date-picker__date-selection",
      onClick: this.handleClick
    }, /*#__PURE__*/React.createElement("input", {
      className: "date-picker__input",
      type: "text",
      placeholder: "Select Date",
      value: selectedDate && dateFns.format(selectedDate, dateFormat)
    })), isCalendarOpen && /*#__PURE__*/React.createElement(Calendar, {
      className: "date-picker__calendar",
      date: selectedDate || new Date(),
      onDatePick: this.handleDatePick
    }));
  }
}
export default DatePicker;