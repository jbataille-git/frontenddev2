import React from "react";

// 01
// dit is de kale versie zonder parameters
// waarden hard gecodeerd
// 
// function ContactCard() {
//   return (
//     <div className="contact-card">
//       <img alt="catphoto" src="http://placekitten.com/300/200" />
//       <h3>Mr. Whiskerson</h3>
//       <p>Phone: (212) 555-1234</p>
//       <p>Email: mr.whiskaz@catnap.meow</p>
//     </div>
//   );
// }

// 02 er komt een object props binnen
//
// function ContactCard(props) {
//   // console.log(props);
//   return (
//     <div className="contact-card">
//       <img alt="catphoto" src={props.imgUrl} />
//       <h3>{props.name}</h3>
//       <p>Phone: {props.phone}</p>
//       <p>Email: {props.email}</p>
//     </div>
//   );
// }

// 03
// er is een object contact om het object props gezet
// en dat moeten we hier dan anders opvangen
function ContactCard(props) {
  // console.log(props);
  return (
    <div className="contact-card">
      <img alt="catphoto" src={props.contact.imgUrl} />
      <h3>{props.contact.name}</h3>
      <p>Phone: {props.contact.phone}</p>
      <p>Email: {props.contact.email}</p>
    </div>
  );
}

export default ContactCard;

// het idee is dat we deze component hergebruiken
// maar er steeds andere waarden in willen zetten

