import React from "react";
import "./../styles/Patient.css"

const Patient = (props) => {

  // sorting the patients looks nicer in the list
  props.patients.sort((a,b) => a.lastName < b.lastName ? -1 : 1 );

  const listOfPatients = props.patients
    .map( item => <tr key={item.patientId}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.yearOfBirth}</td>
                    <td>
                      <input  
                        type="checkbox" 
                        checked={item.isSick}
                        onChange={(event) => props.handlePatientIsSick(event, item.patientId)}
                      >
                      </input>
                    </td>
                  </tr>
        );

  return (
    <div className="patientview">
      <table className="patients-table">
        <tbody>
          <tr>
            <td className="new-patient-header-title" colSpan="6">
              Nieuwe patient invoeren
            </td>
          </tr>  
          <tr className="new-patient-header">
            <th>Voornaam</th>
            <th>Achternaam</th>
            <th>Telefoon</th>
            <th>Email</th>
            <th>Geboortejaar</th>
            <th>Is ziek</th>
          </tr>
          <tr>
            <td><input
              className="new-patient-item"
              type="text"
              maxLength="50"
              name="firstName" 
              placeholder="voer de voornaam in"
              value={props.newPatient.firstName}
              onChange={props.handleOnChange}
              />
            </td>
            <td><input
              className="new-patient-item"
              type="text"
              maxLength="50"
              name="lastName" 
              placeholder="voer de achternaam in"
              value={props.newPatient.lastName}
              onChange={props.handleOnChange}
              />
            </td>
            <td><input
              className="new-patient-item"
              type="text"
              maxLength="50"
              name="phone" 
              placeholder="voer het telefoonnummer in"
              value={props.newPatient.phone}
              onChange={props.handleOnChange}
              />
            </td>
            <td><input 
              className="new-patient-item"
              type="email"
              maxLength="50"
              name="email" 
              placeholder="voer het emailadres in"
              value={props.newPatient.email}
              onChange={props.handleOnChange}
              />
            </td>
            <td><input 
              className="new-patient-item"
              type="text"
              maxLength="4"
              name="yearOfBirth" 
              placeholder="voer het geboortejaar in"
              value={props.newPatient.yearOfBirth}
              onChange={props.handleOnChange}
              />
            </td>
            <td><input 
              className="new-patient-item"
              type="checkbox"
              checked={props.newPatient.isSick}
              name="isSick" 
              onChange={props.handleOnChange}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="6" className="add-patient-row">
              <button className="add-patient-button" onClick={props.handleClick}>Patient toevoegen</button>
            </td>
          </tr>
          {listOfPatients}
        </tbody>
      </table>
    </div>
  )
};

export default Patient;
