// starten met npm start in de my-app map
import "./style.css";
import Header from "./components/Header.js";
import Main from "./components/MainContent.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

// beginnen met classes en css
// we gaan eerste naar de header
//
// add className en niet class, we praten JSX en niet html
// className is een javascript method in de
// vanilla javascript DOM-api
// en daar werkt React mee
// className="navbar"
//
// je kunt alleen className toevoegen aan React elements, niet aan components in App.js
// dus aan de dingen die er als normale html uitzien
//
// de hierarchie in de DOM is lastiger te doorgronden in een React app
// je kunt het niet goed zien in App.js.
// kijk in de Inspector van de browser
//
// caveats
