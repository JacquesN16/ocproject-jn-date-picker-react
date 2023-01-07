# OC Project : Date picker library 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This is a date-picker library build using React and date-fns. This library is created only for academic purpose. 

## Installation 

The package can be installed via [npm](https://github.com/npm/cli):

### `npm install ocproject-jn-date-picker-react`

or via [yarn](https://github.com/yarnpkg/yarn):

### `yarn add ocproject-jn-date-picker-react`


## Example 
In your React project, install the package then import to use the component

```js
import React, { useState } from "react";
import DatePicker from "ocproject-jn-date-picker-react/dist/DatePicker";

const Example = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
    return (<DatePicker onDatePick={date => setSelectedDate(date)}/>)
};
```

## License 

This project is free of use