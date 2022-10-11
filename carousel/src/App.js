import logo from "./logo.svg";
import "./App.css";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <Carousel>
        <img src="./images/cat11.png" alt="Cat1" />
        <img src="./images/cat12.png" alt="Cat2" />
        <img src="./images/cat13.png" alt="Cat3" />
      </Carousel>
    </div>
  );
}

export default App;
