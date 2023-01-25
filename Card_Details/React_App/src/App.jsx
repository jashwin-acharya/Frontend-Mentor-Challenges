import "./App.css";
import desktopBackground from "./assets/bg-main-desktop.png";

function App() {
  return (
    <div className="App">
      <div className="card">
        <img src={desktopBackground} />
      </div>
      <div className="details"></div>
    </div>
  );
}

export default App;
