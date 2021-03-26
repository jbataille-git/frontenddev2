function InputField(props) {

  // wordt een controlled component dus de ingevoerde waarde komt uit state
  return (
    <div className="input-field-container">
      <input
        name="newItemName"
        className="input-field"
        type="text"
        placeholder="Hier je nieuwe artikel"
        maxLength="40"
        value={props.value}
        onChange={props.handleChange}
      >
      </input>
      <button
        className="add-item-button"
        onClick={props.addNewItem2}
      >
      Voeg toe
      </button>
    </div>
  )
}

export default InputField;
