import React from "react";
import "./App.css";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      timerStart: 0,
      timerTime: 0
    };
  }

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({ timerTime: newTime });
      } else {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
        alert(" Countdown ended ");
      }
    }, 10);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };

  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({ timerTime: this.state.timerStart });
    }
  };

  adjustTimer = input => {
    const { timerTime, timerOn } = this.state;
    const max = 216000000;
    if (!timerOn) {
      if (input === "incrementHours" && timerTime + 3600000 < max) {
        this.setState({ timerTime: timerTime + 3600000 });
      } else if (input === "decrementHours" && timerTime - 3600000 > max) {
        this.setState({ timerTime: timerTime - 3600000 });
      } else if (input === "incrementMinutes" && timerTime + 60000 < max) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === "decrementMinutes" && timerTime - 60000 < max) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === "incrementSeconds" && timerTime + 1000 < max) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === "decrementSeconds" && timerTime - 1000 < max) {
        this.setState({ timerTime: timerTime - 1000 });
      }
    }
  };
  render() {
    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <div className="Countdown">
        <div className="Countdown-timer">
          {hours} : {minutes} : {seconds}
        </div>
        <div className="">
          <button onClick={() => this.adjustTimer("incrementHours")}>
            &#8593;{" "}
          </button>
          <button onClick={() => this.adjustTimer("incrementMinutes")}>
            &#8593;{" "}
          </button>
          <button onClick={() => this.adjustTimer("incrementSeconds")}>
            &#8593;{" "}
          </button>
          <button onClick={() => this.adjustTimer("decrementHours")}>
            &#8595;{" "}
          </button>
          <button onClick={() => this.adjustTimer("decrementMinutes")}>
            &#8595;{" "}
          </button>
          <button onClick={() => this.adjustTimer("decrementSeconds")}>
            &#8595;{" "}
          </button>
        </div>
        <div className="buttons">
          {timerOn === false &&
            (timerStart === 0 || timerTime === timerStart) && (
              <button onClick={this.startTimer}> Start </button>
            )}
          {timerOn === true && timerTime > 1000 && (
            <button onClick={this.stopTimer}> Stop </button>
          )}
          {timerOn === false &&
            timerStart !== 0 &&
            timerTime !== 0 &&
            timerStart !== timerTime && (
              <button onClick={() => this.startTimer}> Resume </button>
            )}
          {(timerOn === false || timerTime < 1000) &&
            timerStart !== timerTime &&
            timerStart > 0 && (
              <button onClick={this.resetTimer}> Reset </button>
            )}
        </div>
      </div>
    );
  }
}

export default Countdown;
