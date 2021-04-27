import React from "react";
import "./../styles/Day.css";
import AppointmentInDay from "./AppointmentInDay";

export default ({ appointments }) => {

  appointments = appointments.sort( (a,b) => parseInt(a.time) > parseInt(b.time) ? 1 : -1);

  const appointmentsJSX = appointments.map(
    ({ time, patient, dentist, assistant, isCancelled }, index) => (
      <AppointmentInDay
        time={time}
        patient={patient}
        dentist={dentist}
        assistant={assistant}
        isCancelled={isCancelled}
        key={index}
      />
    )
  );
  return <ul className="dayview">{appointmentsJSX}</ul>;
};
