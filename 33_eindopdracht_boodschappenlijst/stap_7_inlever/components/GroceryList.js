import React from "react"
import ListItem from "./ListItem.js"
import InputField from "./InputField.js"

function GroceryList(props) {

  const groceryItemsList = props.stateData.map((item) => {
    return  <ListItem
              className="grocery-list-item"
              key={item.id}
              title={item.title}
              handleClick={ props.handleClick }
              id={item.id}
              targetList="grocery"
            />
  })
  
  return (
    <div className="grocery-list">
      <h2>Boodschappenlijst</h2>
      <InputField
        addNewItem2={props.addNewItem1}
        value={props.newItemName}
        handleChange={props.handleChange}
      />
      <ul>
        {groceryItemsList}
      </ul>
    </div>
  );
}

export default GroceryList;
