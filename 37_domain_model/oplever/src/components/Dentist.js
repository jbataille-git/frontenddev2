import React from "react";
import "./../styles/Dentist.css"

const Dentist = (props) => {
  const listOfDentists = props.dentists
    .map( item => <tr key={item.staffId}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>
                      <input  
                        type="checkbox" 
                        checked={item.isSick}
                        onChange={event => props.handleIsSick(event, item.staffId)}
                      >
                      </input>
                    </td>
                  </tr>
        );

  return (
    <div className="dentistview">
      <table className="dentists-table">
        <tbody>
          <tr>
            <td className="new-dentist-header-title" colSpan="5">
              Nieuwe tandarts invoeren
            </td>
          </tr>  
          <tr className="new-dentist-header">
            <th>Voornaam</th>
            <th>Achternaam</th>
            <th>Telefoon</th>
            <th>Email</th>
            <th>Is ziek</th>
          </tr>
          <tr>
            <td><input
              className="new-dentist-item"
              type="text"
              maxLength="50"
              name="firstName" 
              placeholder="voer de voornaam in"
              value={props.newDentist.firstName}
              onChange={props.handleOnChange}
              />
            </td>
            <td><input
              className="new-dentist-item"
              type="text"
              maxLength="50"
              name="lastName" 
              placeholder="voer de achternaam in"
              value={props.newDentist.lastName}
              onChange={props.handleOnChange}
              />
            </td>
            <td><input
              className="new-dentist-item"
              type="text"
              maxLength="50"
              name="phone" 
              placeholder="voer het telefoonnummer in"
              value={props.newDentist.phone}
              onChange={props.handleOnChange}
              />
            </td>
            <td><input 
              className="new-dentist-item"
              type="email"
              maxLength="50"
              name="email" 
              placeholder="voer het emailadres in"
              value={props.newDentist.email}
              onChange={props.handleOnChange}
              />
            </td>
            <td><input 
              className="new-dentist-item"
              type="checkbox"
              checked={props.newDentist.isSick}
              name="isSick" 
              onChange={props.handleOnChange}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="5" className="add-dentist-row">
              <button className="add-dentist-button" onClick={props.handleClick}>Tandarts toevoegen</button>
            </td>
          </tr>

          {listOfDentists}

        </tbody>
      </table>
    </div>
  )
};

export default Dentist;