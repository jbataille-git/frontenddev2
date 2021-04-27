import React from "react";
import "../styles/Appointments.css"
import DayOptions from "../assets/DayOptions.js"
import TimeOptions from "../assets/TimeOptions.js"

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);
const sort_time = time => ( time < 10 ? `0${time}` : `${time}`);

const Appointment = props => {

  // --------------------------------------------------------------------------
  // start of form, logic for the options of input-fields
  // --------------------------------------------------------------------------
  // data for the select-lists in the newAppointmentForm
  props.patients.sort((a, b) => a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1 : -1);
  const patientOptions = props.patients.map ( patient => {
    return  <option 
              value={`${patient.patientId},${patient.firstName} ${patient.lastName}`} 
              key={patient.patientId} 
            >
              {`${patient.firstName} ${patient.lastName}`}
            </option>
  })

  // this one was quite difficult
  // we exclude the sick dentists a bit later
  // we start with an empty array of available dentists
  // values in objects can be numbers, values in props are always strings
  let availableDentists = [];
  // a list of ID's of occupied dentists at this time
  const occupiedDentistIds = props.appointments
  .filter( a => String(a.day) === props.newAppointment.day)
  .filter( a => String(a.time) === props.newAppointment.time)
  .map( a => a.dentistId);

  // all dentists are in props.dentists
  props.dentists.forEach( dentist => {
    // if the dentist does not have an appointment at the desired time
    //   he is added to the array of available dentists
    // oooff, tricky that the ID for a dentist is called staffId in props
    // that was not a wise design-decision
    if ( !occupiedDentistIds.includes( dentist.staffId) && !dentist.isSick ) {
      availableDentists.push(dentist);
    }
  })

  availableDentists.sort((a,b) => a.firstName > b.firstName ? 1 : -1 );

  const dentistOptions = availableDentists.map( d => {
      return  <option 
                key={d.staffId} 
                value={`${d.staffId},${d.firstName} ${d.lastName}`}
              >
                {`${d.firstName} ${d.lastName}`}
              </option>
    })

  // we do almost the same for the assistants, only add the check for null
  let availableAssistants = [];
  const occupiedAssistantIds = props.appointments
  .filter( a => a.assistantId !== null)
  .filter( a => String(a.day) === props.newAppointment.day)
  .filter( a => String(a.time) === props.newAppointment.time)
  .map( a => a.assistantId);
  props.assistants.forEach ( assistant => {
    if ( !occupiedAssistantIds.includes( assistant.staffId )) {
      availableAssistants.push(assistant);
    }
  })

  availableAssistants.sort((a,b) => a.firstName > b.firstName ? 1 : -1 );

  const assistantOptions = availableAssistants.map( a => {
    return <option 
              key={a.staffId} 
              value={`${a.staffId},${a.firstName} ${a.lastName}`}
            >
              {`${a.firstName} ${a.lastName}`}
            </option>
  })

  // --------------------------------------------------------------------------
  // end of options-logic for new appointment options
  // just a little bit more logic for the move-appointment time-options
  // --------------------------------------------------------------------------

  // this again is quite complicated
  // which dentist-appointments are blocking us from creating our new appointment
  let blockedHours = props.appointments
  .filter( a => String(a.day) === props.appointmentToMove.moveToDay)
  .filter( a => String(a.dentistId) === props.appointmentToMove.dentistId)
  .map( a => a.time)
  ;

  // if we had an assistant in the original appointment, we're gonna need him/her again after the move
  if ( props.appointmentToMove.assistantId !== "" ) {
      // maybe the assistant also is unavailable at certain hours
    const assistantBlockedHours = props.appointments
    .filter( a => String(a.day) === props.appointmentToMove.moveToDay)
    .filter( a => String(a.assistantId) === props.appointmentToMove.assistantId)
    .map( a => a.time)
    ;

    // join the arrays
    blockedHours = blockedHours.concat( assistantBlockedHours);
  }

  const availableHours = [];
  let i;
  for ( i = 8; i <= 18; i++){
    if (!blockedHours.includes(i)) {
      availableHours.push(i);
    }
  }

  const RestrictedTimeOptions = availableHours.map (
    item => 
    <option key={item} value={item}>
      {item < 10 ? `0${item}:00u` : `${item}:00u`}
    </option>
  );
  
  // --------------------------------------------------------------------------
  // and we're done
  // --------------------------------------------------------------------------


  const newAppointmentForm = (
    <div className="new-appointment-form">
      <form>
        <div className="new-appointment-form-title">
          <h2>Nieuwe afspraak toevoegen</h2>
        </div>
        <div className="new-appointment-headers">
          <span>Patient</span>
          <span>Dag</span>
          <span>Tijd</span>
          <span>Tandarts</span>
          <span>Assistent</span>
        </div>

        <div className="select-div">
        <label hidden htmlFor="patient">Selecteer de patient</label>
        <select id="patient" name="patient" onChange={props.handleFormChange} >
          <option key="0" value="0"></option>
          {patientOptions}
        </select>
        </div>

        <div className="select-div">
        <label hidden htmlFor="day">Selecteer de dag</label>
        <select id="day" name="day" onChange={props.handleFormChange} >
          {DayOptions}
        </select>
        </div>

        <div className="select-div">
        <label hidden htmlFor="time">Selecteer de tijd</label>
        <select id="time" name="time" onChange={props.handleFormChange} >
          {TimeOptions}
        </select>
        </div>

        <div className="select-div">
        <label hidden htmlFor="dentist">Select een beschikbare tandarts</label>
        <select id="dentist" name="dentist" onChange={props.handleFormChange} >
          <option key="0" value="0"></option>
          {dentistOptions}
        </select>
        </div>

        <div className="select-div">
        <label hidden htmlFor="assistant">Selecteer een beschikbare assistent</label>
        <select id="assistant" name="assistant" onChange={props.handleFormChange} >
        <option key="" value="-">-</option>
          {assistantOptions}
        </select>
        </div>

        <div className="add-button-div">
          <button onClick={props.handleSubmit} className="add-appointment-button">Afspraak toevoegen</button>
        </div>
      </form>
    </div>
  );

  // --------------------------------------------------------------------------
  // end of form
  // in real life, we would add some validation
  // did the user fill in all the required fields?
  // --------------------------------------------------------------------------

  // props are not state, they are derived from state, so I can sort them here
  props.appointments.sort( (a, b) => {
    return parseInt( a.day + sort_time(a.time)) > parseInt(b.day + sort_time(b.time)) ? 1 : -1
  });

  const listOfAppointments = props.appointments
    .map( item => 
      <li key={item.appointmentId} className="appointment-li">
        <div hidden>{item.id}</div>
        <div className="day">{item.day}</div>
        <div className={item.isCancelled ? "time-cancelled" : "time"}>{format_time(item.time)}</div>
        <div hidden>{item.patientId}</div>
        <div className="patient">{item.patient}</div>
        <div hidden>{item.dentistId}</div>
        <div className="dentist">{item.dentist}</div>
        <div hidden>{item.assistantId}</div>
        <div className="assistant">{item.assistant === null ? "-" : item.assistant}</div>
        { /* html kan niks met deze boolean, moet er een checkbox of zo van maken */ } 
        <div hidden>{item.isCancelled}</div>

        <div className="delete-button-div">
          <button 
            className="delete-button" 
            onClick={() => props.deleteAppointment(item.appointmentId)}
          >
            Afspraak verwijderen
          </button>
        </div>

        <label id="moveToDayLabel" htmlFor="moveToDay">Dag</label>
        <select 
          id="moveToDay"
          name="moveToDay"
          onChange={(event) => props.handleMoveChange( event, item.appointmentId, item.dentistId, item.assistantId)}
          value={item.appointmentId === props.appointmentToMove.appointmentId ? props.appointmentToMove.moveToDay : ""}
        >
          <option value="0"></option>                      {/* start with an empty value to be sure there is an onChange event*/}
          {DayOptions}
        </select>

        <label id="moveToTimeLabel" htmlFor="moveToTime">Tijd</label>
        <select
          id="moveToTime"
          name="moveToTime"
          onChange={(event) => props.handleMoveChange( event, item.appointmentId, item.dentistId, item.assistantId)}
          value={item.appointmentId === props.appointmentToMove.appointmentId ? props.appointmentToMove.moveToTime : ""}
        >
          <option value="0"></option>                      {/* start with an empty value */}
          {RestrictedTimeOptions}
        </select>

        <div className="move-button-div">
          <button
            id="moveToButton"
            className="move-button"
            onClick={props.moveAppointment}
          >
            Afspraak verplaatsen
          </button>
        </div>
      </li>);

  return (
    <div className="appointmentview">
        {newAppointmentForm}
      <ul className="appointments-ul">
      <div className="appointments-ul-title">
        <h2>Afspraken</h2>
      </div>
        {listOfAppointments}
      </ul>
    </div>
  );
  };

  export default Appointment;