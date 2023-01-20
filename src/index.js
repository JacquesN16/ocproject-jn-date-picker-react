import React from 'react';
import ReactDOM from 'react-dom/client';
import DatePicker from "./lib/DatePicker";
import './index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <DatePicker
          onDatePick={date => console.log(date.toString())}
          altBackground='#7f00ff'
          background='#808080'
      />,
  </React.StrictMode>
);


