import React from "react"
import ListItem from "./ListItem.js"

class List extends React.Component {

  constructor() {
    super()
    this.state = {}
    // this.handleChange = this.handleChange.bind(this);
  };

  render() {
  
    const listItemsArray = this.state.groceryItems.map((item) => {
      return  <ListItem 
                key={item.id}
                title={item.title}
              />
      }
    )

    return (
      <div className="groceries-list">
          {listItemsArray}
      </div>
    );
  }
}

export default List;
