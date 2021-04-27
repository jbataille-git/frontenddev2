import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

export default ({ appointments }) => {

  appointments = appointments.sort((a,b) => parseInt(a.time) > parseInt(b.time) ? 1 : -1);

  const appointmentsJSX = appointments.map(({ time, patient, isCancelled }, index) => (
    <AppointmentInMonth time={time} patient={patient} key={index} isCancelled={isCancelled} />
  ));
  return <div className="day">{appointmentsJSX}</div>;
};
