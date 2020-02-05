import React from "react";
import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="App">
          <div className="App-title">
            <Stopwatch />
            <Countdown />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
