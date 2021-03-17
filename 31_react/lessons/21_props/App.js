import React from "react";
import ContactCard from "./ContactCard.js";

function App() {
  return (
    <div className="contacts">
      <ContactCard
        contact={{
          name: "Mr. Whiskerson",
          imgUrl: "http://placekitten.com/300/200",
          phone: "(212) 555-1234",
          email: "mr.whiskaz@catnap.meow",
        }}
      />

      <ContactCard
        contact={{
          name: "Fluffykins",
          imgUrl: "http://placekitten.com/400/200",
          phone: "(212) 555-2345",
          email: "fluff@me.com",
        }}
      />

      <ContactCard
        contact={{
          name: "Destroyer",
          imgUrl: "http://placekitten.com/400/300",
          phone: "(212) 555-3456",
          email: "ofworlds@yahoo.com",
        }}
      />

      <ContactCard
        contact={{
          name: "Felix",
          imgUrl: "http://placekitten.com/200/100",
          phone: "(212) 555-4567",
          email: "thecat@hotmail.com",
        }}
      />
    </div>
  );
}

export default App;

// stap 1 hier begonnen we mee:
//
// <div className="contact-card">
// <img alt="catphoto" src="http://placekitten.com/300/200"/>
// <h3>Mr. Whiskerson</h3>
// <p>Phone: (212) 555-1234</p>
// <p>Email: mr.whiskaz@catnap.meow</p>
// </div>
//
// daarna props invullen in de component
//
// en in de component opvangen als object
//
// dan aan deze kant een object vullen
// {} voor js, een tweede {} om het een object te laten zijn
// en dat weer opvangen aan de andere kant

// stop 2 
// <ContactCard
// name="Mr. Whiskerson"
// imgUrl="http://placekitten.com/300/200"
// phone="(212) 555-1234"
// email="mr.whiskaz@catnap.meow"
// />
//
// <ContactCard
// name="Fluffykins"
// imgUrl="http://placekitten.com/400/200"
// phone="(212) 555-2345"
// email="fluff@me.com"
// />
//
// <ContactCard
// name="Destroyer"
// imgUrl="http://placekitten.com/400/300"
// phone="(212) 555-3456"
// email="ofworlds@yahoo.com"
// />
//
// <ContactCard
// name="Felix"
// imgUrl="http://placekitten.com/200/100"
// phone="(212) 555-4567"
// email="thecat@hotmail.com"
// />
