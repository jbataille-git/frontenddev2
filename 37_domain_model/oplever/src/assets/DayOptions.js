import React from "react"

// maybe our list should containt an empty element
const numbers = [];
let i;
for (i = 1; i <= 28; i ++) {
  numbers.push(i);
}

const DayOptions = numbers.map (
  item => <option key={item} value={item}>{item}</option>
)

export default DayOptions;