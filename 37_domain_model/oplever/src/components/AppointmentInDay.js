import React from "react";
import "../styles/Day.css"
// voorloopnul
const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

export default ({ time, patient, dentist, assistant, isCancelled }) => {

  const timeClassName = (isCancelled) ? "time-cancelled" : "time";

  return (
  <li className="appointment">
    <div className={timeClassName}>{format_time(time)}</div>
    <div className="patient">Patiënt: {patient}</div>
    <div className="dentist">Tandarts: {dentist}</div>
    <div className="assistant">Assistent: {assistant}</div>
  </li>
)};
