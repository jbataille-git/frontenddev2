import React from "react";
import "../styles/AppointmentInMonth.css"

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

export default ({ time, patient, isCancelled }) => {
  
  const timeClassName = (isCancelled) ? "time-cancelled" : "time";

  return (
  <div className="appointment">
    <span className={timeClassName}>{format_time(time)}</span>
    <span className="patient">{patient}</span>
  </div>
)};
