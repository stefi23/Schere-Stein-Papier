import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element: ["✋", "✌️", "✊"],
      computer: "",
      player: "",
      winner: "unknown",
      computerScore: 0,
      playerScore: 0,
      tie: 0,
      counter: 3,
      counterComplete: false,
    };
  }

  handleChoice = (event) => {
    event.preventDefault();
    let player = event.target.value;
    let countDown = setInterval(() => {
      this.setState({
        counter: this.state.counter - 1,
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(countDown);
      this.setState({
        counter: 3,
        counterComplete: true,
      });
      this.getScore(winner);
    }, 3000);

    let computer = this.getComputerMove();
    let winner = this.getWinner(player, computer);
    this.setState({
      player,
      winner,
      computer,
    });
    console.log(this.state.player);
  };

  getComputerMove = () => {
    let index = getRandomInt();

    if (index === 0) return "✋";
    else if (index === 1) return "✌️";
    else return "✊";

    function getRandomInt() {
      let min = 0;
      let max = 3;
      return Math.floor(Math.random() * (max - min)) + min;
    }
  };

  getWinner = (player, computer) => {
    if (player === computer) {
      return "tie";
    } else if (player === "✊") {
      if (computer === "✌️") {
        return "Player";
      } else {
        return "Computer";
      }
    } else if (player === "✌️") {
      if (computer === "✋") {
        return "Player";
      } else {
        return "Computer";
      }
    } else if (player === "✋") {
      if (computer === "✊") {
        return "Player";
      } else {
        return "Computer";
      }
    }
  };

  playGame = () => {
    this.setState({
      winner: "unknown",
      counterComplete: false,
    });
  };

  resetGame = () => {
    this.setState({
      computerScore: 0,
      playerScore: 0,
      tie: 0,
      counterComplete: false,
    });
    this.playGame();
  };
  //

  getScore = (winner) => {
    if (winner === "Player") {
      this.setState({
        playerScore: this.state.playerScore + 1,
      });
    } else if (winner === "Computer") {
      this.setState({
        computerScore: this.state.computerScore + 1,
      });
    } else {
      this.setState({
        tie: this.state.tie + 1,
      });
    }
  };

  render() {
    return (
      <div className="App ">
        <header className="App-header">
          <div className="p-3 box">
            <h1>Rock, Paper, Scissors!</h1>

            {this.state.winner === "unknown" ? (
              <div className="row">
                <div className="container ">
                  <p>Play against the computer. Press any button to start.</p>
                </div>
                <div className="col-12">
                  <button
                    onClick={this.handleChoice}
                    name="user"
                    value={"✊"}
                    className="m-2 buttonGrayRounded"
                    aria-label="stone"
                    role="img"
                  >
                    ✊
                  </button>

                  <button
                    onClick={this.handleChoice}
                    name="user"
                    value={"✋"}
                    className="m-2 buttonGrayRounded"
                    aria-label="scissors"
                    role="img"
                  >
                    ✋
                  </button>

                  <button
                    onClick={this.handleChoice}
                    name="user"
                    value={"✌️"}
                    className="m-2 buttonGrayRounded"
                    aria-label="scissors"
                    role="img"
                  >
                    ✌️
                  </button>
                </div>
              </div>
            ) : (
              <div className="row p-3 m-3">
                <div className="col-4 text-center">
                  <p>Player:</p>
                  <p className="m-2">
                    <span
                      // role="img"
                      // aria-label="player choice"
                      className="buttonBox"
                      style={{
                        background:
                          this.state.winner === "Player" &&
                          this.state.counterComplete === true
                            ? "#8a6a76"
                            : this.state.counterComplete === true &&
                              this.state.winner === "tie"
                            ? "#49515f"
                            : "#49515f",
                      }}
                    >
                      {this.state.player}
                    </span>
                  </p>
                </div>
                <div className="col-4 text-center d-flex align-items-center justify-content-center ">
                  {this.state.counterComplete ? (
                    <p className="mb-0">
                      {" "}
                      {this.state.winner === "tie"
                        ? "You have a tie"
                        : this.state.winner + " won!"}
                    </p>
                  ) : (
                    <p className="mb-0" style={{ fontSize: "28px" }}>
                      {this.state.counter}
                    </p>
                  )}
                </div>
                <div className="col-4 text-center">
                  <p>Computer:</p>
                  {this.state.counterComplete ? (
                    <p className="m-2 ">
                      <span
                        role="img"
                        aria-label="computer choice"
                        className="buttonBox"
                        style={{
                          background:
                            this.state.winner === "Computer" &&
                            this.state.counterComplete === true
                              ? "#8a6a76"
                              : this.state.counterComplete === true &&
                                this.state.winner === "tie"
                              ? "#49515f"
                              : "#49515f",
                        }}
                      >
                        {" "}
                        {this.state.computer}
                      </span>
                    </p>
                  ) : (
                    <p className="m-2">
                      <span
                        className="buttonBox"
                        role="img"
                        aria-label="question mark"
                      >
                        ❔
                      </span>
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="row mt-4">
            <div className="col-12">
              {this.state.winner !== "unknown" &&
              this.state.counterComplete === true ? (
                <button
                  className="buttonGray m-2 border rounded"
                  onClick={this.playGame}
                >
                  Play again
                </button>
              ) : null}

              <button
                className="buttonGray m-2 border rounded"
                onClick={this.resetGame}
                disabled={
                  this.state.computerScore === 0 &&
                  this.state.playerScore === 0 &&
                  this.state.tie === 0
                }
              >
                Reset Game
              </button>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <table
                id="scoreboard"
                align="center"
                className="table table-dark"
              >
                <thead>
                  <tr>
                    <td> Player </td>
                    <td width="30"> &nbsp; </td>
                    <td> Computer </td>
                    <td width="30"> &nbsp; </td>
                    <td> Tie </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.playerScore}</td>
                    <td> &nbsp; </td>
                    <td>{this.state.computerScore}</td>
                    <td> &nbsp; </td>
                    <td>{this.state.tie}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default App;
