// this file is getting too large
// what is a good way to chop it up in smaller pieces?
// What's the datatype of the Id's I use?
// in state they are numbers, in props they are strings
// for production, this would need a check but things seem to be working sofar

import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Calendar from "./components/Calendar";
import Day from "./components/Day";
import Dentist from "./components/Dentist";
import Patient from "./components/Patient";
import Appointment from "./components/Appointment";

import staffArrayImport from "./assets/StaffData"
import patientsArrayImport from "./assets/PatientsData"

import generateRandomAppointments from "./assets/utils";

const appointments = generateRandomAppointments(150);

class App extends React.Component {

  constructor () {
    super()
    this.state = { 
      staffArray: [],
      newDentist: { staffId: "",
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    function: "dentist",
                    isSick: false
                    },
      patientsArray: [],
      newPatient: { patientId: "",
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    yearOfBirth: "",
                    isSick: false
      },
      appointmentsArray: [],
      newAppointment: { appointmentId: "",
                        day: "1",
                        time: "8",
                        patientId: "",
                        patient: "",
                        dentistId: "",
                        dentist: "",
                        assistantId: "",
                        assistant: "",
                        isCancelled: false
                      },
      appointmentToMove: { appointmentId: "",
                          moveToDay: "",
                          moveToTime: "",
                          dentistId: "",
                          assistantId: ""
      }
    };
    
    this.handleDentistOnChange = this.handleDentistOnChange.bind(this);
    this.addNewDentist         = this.addNewDentist.bind(this);
    this.handlePatientOnChange = this.handlePatientOnChange.bind(this);
    this.addNewPatient         = this.addNewPatient.bind(this);
    this.handleDentistIsSick   = this.handleDentistIsSick.bind(this);
    this.handleFormChange      = this.handleFormChange.bind(this);
    this.handleSubmit          = this.handleSubmit.bind(this);
    this.deleteAppointment     = this.deleteAppointment.bind(this);
    this.handlePatientIsSick   = this.handlePatientIsSick.bind(this);
    this.handleMoveChange      = this.handleMoveChange.bind(this);
    this.moveAppointment       = this.moveAppointment.bind(this);

  }

  // get dentists and patients and load them in state
  // and add the appointments too
  // a dentist could be initialized as sick, we do not handle that here
  // we could create the appointments with only the dentists that are not sick
  // or we could update the appointmentsArray after initializing it
  // but we're not gonna do that because this assignment is enough of a pain in the neck already
  componentDidMount() {
    this.setState( prevState => {
      return  { ...prevState,
                staffArray: staffArrayImport,
                patientsArray: patientsArrayImport,
                appointmentsArray: appointments
              }
    })
    
  }


  // modify values of the new dentist via state
  handleDentistOnChange(event) {
  const {name, value, type, checked} = event.target;
    let dentistToAdd = { ...this.state.newDentist}
    if (type === 'checkbox') {
      dentistToAdd[name] = checked;
    } else {
      dentistToAdd[name] = value;
    }

    this.setState(prevState => {
      const newState = { ...prevState, newDentist: dentistToAdd}
      return newState;
    });
  }

  // add a new dentist
  addNewDentist() {
    // event.preventDefault();  // do we need this? We need it when we create a new appointment. What's the difference?
    if  ( this.state.newDentist.firstName === ""
          || this.state.newDentist.lastName === ""
          || this.state.newDentist.phone === ""
          || this.state.newDentist.email === ""
        ) 
    {
      alert("Kan geen nieuwe tandarts invoeren, gegevens zijn niet compleet. Vul gegevens aan.")
      return;
    };

    let dentistToAdd = { ...this.state.newDentist};
    dentistToAdd.staffId = String(this.state.staffArray.length + 1);
    let newStaffArray = [ ...this.state.staffArray];
    newStaffArray.push( dentistToAdd);
    this.setState( prevState => {
      return { ...prevState, staffArray: newStaffArray}
    })
    
    // and nicely clear the inputfields
    const newEmptyDentist = 
      { staffId: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        function: "dentist",
        isSick: false
      };

    this.setState( prevState => {
      return { ...prevState, newDentist: newEmptyDentist}
    })
  }


  // modify newPatient inputfields via state
  handlePatientOnChange(event) {
    const {name, value, type, checked} = event.target;
      let patientToAdd = { ...this.state.newPatient}
      if (type === 'checkbox') {
        patientToAdd[name] = checked;
      } else {
        patientToAdd[name] = value;
      }
  
      this.setState(prevState => {
        const newState = { ...prevState, newPatient: patientToAdd}
        return newState;
      });
    }

    
  // add a new patient
  addNewPatient() {
    let patientToAdd = { ...this.state.newPatient};
    patientToAdd.patientId = String(this.state.patientsArray.length + 1);
    let newPatientsArray = [ ...this.state.patientsArray];
    newPatientsArray.push( patientToAdd);
    this.setState( prevState => {
      return { ...prevState, patientsArray: newPatientsArray}
    })
    
    // and clear the inputfields
    const newEmptyPatient = 
      { patientId: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        yearOfBirth: "",
        isSick: false
      };

    this.setState( prevState => {
      return { ...prevState, newPatient: newEmptyPatient}
    })
  }


  // flip the checkbox on screen
  handleDentistIsSick (event, id) {
    const {checked} = event.target;
    this.setState( prevState => {
      const updatedDentists = prevState.staffArray.map( dentist => {
        if (dentist.staffId === id) {
          return { ...dentist, isSick: checked}
        } else {
          return dentist;
        }
      })
      return { ...prevState, staffArray: updatedDentists};
    });

    // and flag the appointments
    this.setState( prevState => {
      const updatedAppointments = prevState.appointmentsArray.map ( appointment => {
        if (appointment.dentistId === id) {
          return { ...appointment, isCancelled: checked}
        } else {
          return appointment;
        }
      })
      return { ...prevState, appointmentsArray: updatedAppointments}
    })
  }


  // handling a new appointment
  // do we have to handle an empty assistant?
  handleFormChange (event) {
    const {name, value } = event.target;
    let appointmentToAdd = { ...this.state.newAppointment};
    appointmentToAdd.appointmentId = String(this.state.appointmentsArray.length + 1);
    if ( name === "patient" || name === "dentist" || name === "assistant") {
      appointmentToAdd[name + "Id"] = value.split(",")[0];  
      appointmentToAdd[name] = value.split(",")[1];  
    } else {
      appointmentToAdd[name] = value;
    }

    // funny things happen if we omit this line:
    if (appointmentToAdd.assistant === ""){
      appointmentToAdd.assistant = "-";
    }

    this.setState( prevState => {
      return { ...prevState, newAppointment: appointmentToAdd};
    })
  }


  // add a new appointment
  handleSubmit(event) {
    event.preventDefault();
    if  ( this.state.newAppointment.patient === ""
          || this.state.newAppointment.dentist === ""
        ) 
    {
      alert("Kan geen nieuwe afspraak maken, gegevens zijn niet compleet")
      return;
    };

    let appointmentToAdd = { ...this.state.newAppointment};
    // this is not failsafe
    // if we remove some appointments from the middle of the array, and then add an appointment, we're gonna be in trouble
    appointmentToAdd.id = String(this.state.appointmentsArray.length + 1 );
    let newAppointmentsArray = [ ...this.state.appointmentsArray];
    newAppointmentsArray.push(appointmentToAdd);
    this.setState ( prevState => {
      return { ...prevState, appointmentsArray: newAppointmentsArray}
    })

    // and clear the inputfields
    const newEmptyAppointment = 
      { ...this.state.newAppointment,
        patient: "",
        patientId: "",
        dentist: "",
        dentistId: "",
        assistant: "",
        assistantId: ""
      };

    this.setState ( prevState => {
      return { ...prevState, newAppointment: newEmptyAppointment};
      })
  };


  // delete an appointment
  deleteAppointment(idToDelete) {
    const updatedAppointmentsArray = this.state.appointmentsArray
      .filter( item => {
        return item.appointmentId !== idToDelete;
    })

    this.setState ( prevState => {
      return { ...prevState, appointmentsArray: updatedAppointmentsArray}
    });
  };


  // handle a patient that has fallen ill
  handlePatientIsSick(event, sickPatientId) {
    const {checked} = event.target;
    this.setState ( prevState => {

      //update the screen
      const updatedPatientsArray = prevState.patientsArray
        .map( patient => {
          if (patient.patientId === sickPatientId) {
            return { ...patient, isSick: checked}
          } else {
            return patient;
          }
        })

      // and then delete the appointments
      const updatedAppointmentsArray = this.state.appointmentsArray
        .filter( item => item.patientId !== sickPatientId);

      // I can do this in one calll tot setState
      return { ...prevState, 
              patientsArray: updatedPatientsArray,
              appointmentsArray: updatedAppointmentsArray
            };
    })
  }


  // last step, move an appointmnet
  handleMoveChange (event, appId, denId, assId) {
    const {name, value} = event.target;
    let aToMove = { ...this.state.appointmentToMove};
    aToMove.appointmentId = appId;
    aToMove.dentistId = denId;
    aToMove.assistantId = assId;
    aToMove[name] = value;

    this.setState ( prevState => {
      return { ...prevState, appointmentToMove: aToMove};
    })

  }

  moveAppointment () {
    if ( this.state.appointmentToMove.moveToDay === "" || this.state.appointmentToMove.moveToTime === "") 
    {
      alert("Kan afspraak niet verplaatsen, dag en/of tijd is niet ingevuld. Vul de gegevens aan.");
      return;
    };

    this.setState( prevState => {
      const updatedAppointments = prevState.appointmentsArray.map ( appointment => {
        if (appointment.appointmentId === this.state.appointmentToMove.appointmentId) {
          return { ...appointment,
                    day: this.state.appointmentToMove.moveToDay,
                    time: this.state.appointmentToMove.moveToTime
                }
        } else {
          return appointment;
        }
      });

      // clean up the screen
      const emptyAppointmentToMove = 
        { appointmentId: "",
          moveToDay: "",
          moveToTime: "",
          dentistId: "",
          assistantId: ""
      };

      return { ...prevState,
                appointmentsArray: updatedAppointments,
                appointmentToMove: emptyAppointmentToMove
            }
    })
  }


  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/calendar">Kalender</Link>
              </li>
              <li>
                <Link to="/day">Dag</Link>
              </li>
              <li>
                <Link to="/dentist">Tandarts</Link>
              </li>
              <li>
                <Link to="/patient">Patient</Link>
              </li>
              <li>
                <Link to="/appointment">Afspraak</Link>
              </li>
            </ul>
          </nav>
          <main>
            <Switch>
            <Route path="/dentist">
                <Dentist 
                  dentists={this.state.staffArray.filter( item => item.function === "dentist")}
                  newDentist={this.state.newDentist}
                  handleOnChange={this.handleDentistOnChange}
                  handleClick={this.addNewDentist}
                  handleIsSick={this.handleDentistIsSick}
                />
              </Route>
              <Route path="/patient">
                <Patient
                  patients={this.state.patientsArray}
                  newPatient={this.state.newPatient}
                  handleOnChange={this.handlePatientOnChange}
                  handleClick={this.addNewPatient }
                  handlePatientIsSick={this.handlePatientIsSick}
                />
              </Route>
              <Route path="/appointment">
                <Appointment
                  appointments={this.state.appointmentsArray}
                  handleSubmit={this.handleSubmit}
                  newAppointment={this.state.newAppointment}
                  handleFormChange={this.handleFormChange}
                  patients={this.state.patientsArray}
                  dentists={this.state.staffArray.filter( item => item.function === "dentist")}
                  assistants={this.state.staffArray.filter( item => item.function === "assistant")}
                  deleteAppointment={this.deleteAppointment}
                  handleMoveChange={this.handleMoveChange}
                  appointmentToMove={this.state.appointmentToMove}
                  moveAppointment={this.moveAppointment}
                />
              </Route>
              <Route path="/calendar">
                <Calendar
                  appointments={this.state.appointmentsArray}
                />
              </Route>
              <Route path="/day">
                <Day appointments={this.state.appointmentsArray.filter(app => app.day === 1)} />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  };
};

export default App;

