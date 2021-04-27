import React from "react"

const numbers = [];
let i;
for (i = 8; i <= 18; i ++) {
  numbers.push(i);
}

const TimeOptions = numbers.map (
  item => <option 
            key={item}
            value={item}
          >
            {item < 10 ? `0${item}:00u` : `${item}:00u`}
          </option>
)

export default TimeOptions;