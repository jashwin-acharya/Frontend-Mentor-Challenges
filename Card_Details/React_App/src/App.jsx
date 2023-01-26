import "./App.css";
import desktopBackground from "./assets/bg-main-desktop.png";
import cardFront from "./assets/bg-card-front.png";
import cardBack from "./assets/bg-card-back.png";
import cardLogo from "./assets/card-logo.svg";
import favicon from "./assets/favicon-32x32.png";
import completeIcon from "./assets/icon-complete.svg";

function App() {
  return (
    <div className="App">
      <Card />
      <div className="details">
        <div className="input-info">
          <div className="name">
            <p>CARDHOLDER NAME</p>
            <input
              type="text"
              placeholder="e.g. Jane Appleseed"
              id="cardholder-name"
            ></input>
          </div>

          <div className="number">
            <p>CARD NUMBER</p>
            <input
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              id="cardholder-name"
            ></input>
          </div>

          <button>Confirm</button>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <div id="background">
        <img src={desktopBackground} />
      </div>
      <div id="front-container">
        <img src={cardFront} id="front" />
      </div>
      <div id="back-container">
        <img src={cardBack} id="back" />
      </div>
    </div>
  );
}

export default App;
