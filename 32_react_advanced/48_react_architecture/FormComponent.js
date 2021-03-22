import React from "react"

function FormComponent(props) {
  return (
    <main>
      <form>
        <input
          placeholder="First Name"
          name="firstName"
          type="text"
          value={props.stateData.firstName}
          onChange={props.handleChange}
        />
        <br />
        <input
          placeholder="Last Name"
          name="lastName"
          type="text"
          value={props.stateData.lastName}
          onChange={props.handleChange}
        />
        <br />
        <input
          placeholder="Age"
          name="age"
          type="text"
          value={props.stateData.age}
          onChange={props.handleChange}
        />
        <br />
        <br />

        <label>Gender</label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.stateData.gender === "male"}
            onChange={props.handleChange}
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.stateData.gender === "female"}
            onChange={props.handleChange}
          />
          Female
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={props.stateData.gender === "other"}
            onChange={props.handleChange}
          />
          Other
        </label>
        <br />
        <br />

        <label>Destination:</label>
        <br />
        <select
          value={props.stateData.destination}
          onChange={props.handleChange}
          name="destination"
        >
          <option value="">- Please choose a destination --</option>
          <option value="De Drentse Aa">De Drentse Aa</option>
          <option value="geuldal">Het Geuldal</option>
          <option value="beemster">De Beemster</option>
        </select>
        <br />
        <br />

        <label>Dietary restrictions</label>
        <br />
        <input
          type="checkbox"
          name="isVegan"
          checked={props.stateData.isVegan}
          onChange={props.handleChange}
        />
        <label>Vegetarian</label>
        <br />
        <input
          type="checkbox"
          name="isKosher"
          checked={props.stateData.isKosher}
          onChange={props.handleChange}
        />
        <label>Kosher</label>
        <br />
        <input
          type="checkbox"
          name="isLactoseFree"
          checked={props.stateData.isLactoseFree}
          onChange={props.handleChange}
        />
        <label>Lactosefree</label>
        <br />
        <br />
        <button>Submit</button>
      </form>
      <hr />
      <h2>Entered information:</h2>
      <p>
        Your name: {props.stateData.firstName} {props.stateData.lastName}
      </p>
      <p>Your age: {props.stateData.age}</p>
      <p>Your gender: {props.stateData.gender}</p>
      <p>Your destination: {props.stateData.destination}</p>
      <p>Your dietary restrictions: </p>
      <p>
        {props.stateData.isVegan ? "Vegan " : ""}
        {props.stateData.isKosher ? "Kosher" : ""}
        {props.stateData.isLactoseFree ? " Lactose free" : ""}
      </p>
    </main>
  );
}

export default FormComponent