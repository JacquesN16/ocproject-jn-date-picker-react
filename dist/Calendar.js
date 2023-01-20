import React from "react";
import { getMonthAsWord, getDaysForCalendar, getDaysByWeek } from './helper';
import classNames from "classnames";
import * as dateFns from 'date-fns';
import './style.scss';
class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.date
    };
  }
  addMonth = () => this.setState({
    date: dateFns.addMonths(this.state.date, 1)
  });
  subMonth = () => this.setState({
    date: dateFns.subMonths(this.state.date, 1)
  });
  addYear = () => this.setState({
    date: dateFns.addYears(this.state.date, 1)
  });
  subYear = () => this.setState({
    date: dateFns.subYears(this.state.date, 1)
  });
  showCurrentDate = () => this.setState({
    date: new Date()
  });
  renderControls() {
    const {
      date
    } = this.state;
    return /*#__PURE__*/React.createElement("div", {
      className: "calendar__controls-row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "calendar__controls"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-angle-left",
      onClick: this.subMonth
    }), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-angle-double-left",
      onClick: this.subYear
    })), /*#__PURE__*/React.createElement("div", {
      className: "calendar__month-with-year",
      onClick: this.showCurrentDate
    }, getMonthAsWord(date), ' ', date.getFullYear()), /*#__PURE__*/React.createElement("div", {
      className: "calendar__controls"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-angle-double-right",
      onClick: this.addYear
    }), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-angle-right",
      onClick: this.addMonth
    })));
  }
  renderDaysOfWeek() {
    return /*#__PURE__*/React.createElement("div", {
      className: "calendar__days-of-week",
      style: {
        background: this.props.altBackground ? this.props.altBackground : '#F1F1F1'
      }
    }, ['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((letter, i) => /*#__PURE__*/React.createElement("div", {
      className: "calendar__day-of-week",
      key: i
    }, letter)));
  }
  renderDate(date) {
    return /*#__PURE__*/React.createElement("div", {
      className: classNames('calendar__day', {
        'calendar__day--pale': !dateFns.isSameMonth(date, this.state.date),
        'calendar__day--emphasize': dateFns.isToday(date)
      }),
      onClick: () => this.props.onDatePick(date),
      key: date
    }, date.getDate());
  }
  render() {
    const weeksWithDaysInside = getDaysByWeek(getDaysForCalendar(this.state.date));
    return /*#__PURE__*/React.createElement("div", {
      className: classNames('calendar', this.props.className),
      style: {
        background: this.props.background ? this.props.background : '#FFF'
      }
    }, this.renderControls(), this.renderDaysOfWeek(), weeksWithDaysInside.map((week, i) => /*#__PURE__*/React.createElement("div", {
      className: "calendar__week",
      key: i
    }, week.map(this.renderDate, this))));
  }
}
export default Calendar;