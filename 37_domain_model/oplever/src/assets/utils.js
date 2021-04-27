import patients from "./PatientsData.js"
import staff from "./StaffData.js"

let counter = 0;

const getNextId = () => {
  counter++;
  return counter;
}

// const getRandomName = () => {
//   const person = names[Math.floor(Math.random() * 50)];
//   return `${person.firstName} ${person.lastName}`;
// };
const getRandomPatient = () => {
  const patient = patients[Math.floor(Math.random() * 50)];
  return patient;
}

const getRandomDentist = () => {
  const dentists = staff.filter( item => item.function === "dentist" );
  const numberOfDentists = dentists.length;
  return dentists[Math.floor(Math.random() * numberOfDentists)];
}

// it would be nice to have an empty return, every now and then
// for the appointments without an assistant, so we double the randomNumber
// we have to handle it with an if, otherwise we get an undefined error
const getRandomAssistant = () => {
  const assistants = staff.filter( item => item.function === "assistant" );
  const numberOfAssistants = assistants.length;
  // with 4 assistants, this should return a number 0 1 2 3 4 5 6 7
  const randomNumber = Math.floor(Math.random() * ((numberOfAssistants * 2) - 1));
  if ( randomNumber < numberOfAssistants) {
    const assistant = assistants[randomNumber];
    return assistant;
  } else {
    return null;
  }
}

const getRandomTime = () => {
  let hour;
  while (true) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      return hour;
    }
  }
};

const getRandomDay = () => Math.floor(Math.random() * 28) + 1;

// we have to add an id to the appointment
const generateRandomAppointment = () => {
  
  const patient = getRandomPatient();
  const dentist = getRandomDentist();
  const assistant = getRandomAssistant();

  return  { appointmentId: getNextId(),
            day: getRandomDay(),
            time: getRandomTime(),
            patientId: patient.patientId,
            patient: `${patient.firstName} ${patient.lastName}`,
            dentistId: dentist.staffId,
            dentist: `${dentist.firstName} ${dentist.lastName}`,
            assistantId: (assistant === null) ? null : assistant.staffId,
            assistant: (assistant === null) ? null : `${assistant.firstName} ${assistant.lastName}`,
            isCancelled: false
          }
};

const generateRandomAppointments = num =>
  Array(num)
    .fill(0)
    .map(_ => generateRandomAppointment());

export default generateRandomAppointments;
