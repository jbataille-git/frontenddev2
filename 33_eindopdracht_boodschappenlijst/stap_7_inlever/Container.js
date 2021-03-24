import React from "react"
import GroceryList from "./components/GroceryList.js"
import ShoppingCart from "./components/ShoppingCart.js"

class Container extends React.Component {

  constructor() {
    super()
    this.state = {
      groceryItems: [
        { id: 1, title: "Verende zadelpen 27,2mm", amount: 0},
        { id: 2, title: "Schwalbe Marathon Plus buitenband 37/622", amount: 0},
        { id: 3, title: "Shimano rollerbrake-grease in tube 25 ml.", amount: 0},
        { id: 4, title: "Toeclipriempjes, zwart, nylon", amount: 0}
      ],
      cartListItems: [
        {id: 11, title: "Stuurlint kurk, pantermotief", amount: 1},
        {id: 12, title: "Voorvork klassiek zwart met remnok", amount: 1},
        {id: 13, title: "Achterlicht D-Toplight Plus Bush & Muller", amount: 1}
      ],
      newItemName: "",
      idCounter: 100
    }
    this.handleClick = this.handleClick.bind(this);
    this.addGroceryToCart = this.addGroceryToCart.bind(this)
    this.emptyCart = this.emptyCart.bind(this)
    this.addNewItem = this.addNewItem.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addAmountToItem = this.addAmountToItem.bind(this)
  };

  addGroceryToCart(itemId) {

    const newCartItem = this.state.groceryItems.filter( item => item.id === itemId);
    newCartItem[0].amount = 1;
    this.setState ({
      cartListItems: [ ...this.state.cartListItems].concat(newCartItem)
    })  
  }

  addAmountToItem(itemId) {
    const newCartListItems = this.state.cartListItems.map((item) => {
      if (item.id === itemId) {
        item.amount = item.amount + 1
      }
      return item;
    })
    this.setState({cartListItems: newCartListItems});
  }

  handleClick(groceryId) {

    // ik kan currentAmount opvragen uit state, dan moet ik een array loop doen
    // ik kan het ook even zelf tellen met een array loop, dat is misschien betrouwbaarder
    const currentAmount = this.state.cartListItems.filter( item => item.id === groceryId).length;

    if (currentAmount === 0) {
      this.addGroceryToCart(groceryId);
    } else {
      this.addAmountToItem(groceryId)
    }
  }

  emptyCart() {
    this.setState ({cartListItems: []})
  }
  
  handleChange(event) {
    this.setState((prevState) => {
      return { ...prevState, newItemName: event.target.value}
    })
  }

  addNewItem() {

    const newGroceryItem = { id: this.state.idCounter, title: this.state.newItemName};
    const newGroceryItems = Array.from(this.state.groceryItems);
    newGroceryItems.push(newGroceryItem);

    const newIdCounter = this.state.idCounter + 1;

    this.setState((prevState) => {
      return { ...prevState, groceryItems: newGroceryItems, idCounter: newIdCounter }
    })

  }

  render() {
    return (
      <div className="container">
        <header className="container-header"><h1>Boodschappenlijst</h1></header>
        <GroceryList 
          stateData={this.state.groceryItems}
          handleClick={this.handleClick}
          addNewItem1={this.addNewItem}
          newItemName={this.state.newItemName}
          handleChange={this.handleChange}
        />
        <ShoppingCart 
          stateData={this.state.cartListItems}
          handleClick={this.handleClick}
          emptyCart={this.emptyCart}
        />
      </div>
    );
  }
}

export default Container;
