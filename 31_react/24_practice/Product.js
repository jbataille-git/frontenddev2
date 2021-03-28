import React from "react";

function Product(props) {
  // console.log(props);
  return (
    <div>
      <h2>{props.product.name}</h2>
      <p>
        € {props.product.price} - {props.product.description}
      </p>
      <hr />
    </div>
  );
}

export default Product;

// conditional rendering and styling:
//
// <p style={{display: !props.question && "none"}}>question: {props.question}</p>
// <p style={{color: !props.question && "#888888"}}>punchline: {props.punchLine}</p>

// fancy styling voor het dollarteken en de prijs
// <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
