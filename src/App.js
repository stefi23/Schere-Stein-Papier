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
    };
  }

  handleChoice = (event) => {
    event.preventDefault();
    let player = event.target.value;
    let computer = this.getComputerMove();
    let winner = this.getWinner(player, computer);
    this.setState({
      player,
      computer,
      winner,
    });
    this.getScore(winner);
  };

  getComputerMove = () => {
    function getRandomInt() {
      let min = 0;
      let max = 3;
      return Math.floor(Math.random() * (max - min)) + min;
    }
    let index = getRandomInt();
    if (index === 0) return "✋";
    else if (index === 1) return "✌️";
    else return "✊";
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
    });
  };

  resetGame = () => {
    this.setState({
      computerScore: 0,
      playerScore: 0,
      tie: 0,
    });
    this.playGame();
  };
  //

  getScore = (winner) => {
    if (winner === "player") {
      this.setState({
        playerScore: this.state.playerScore + 1,
      });
    } else if (winner === "computer") {
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
                  >
                    ✊
                  </button>
                  <button
                    onClick={this.handleChoice}
                    name="user"
                    value={"✋"}
                    className="m-2 buttonGrayRounded"
                  >
                    ✋
                  </button>

                  <button
                    onClick={this.handleChoice}
                    name="user"
                    value={"✌️"}
                    className="m-2 buttonGrayRounded"
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
                    <span className="buttonBoxPink"> {this.state.player}</span>
                  </p>
                </div>
                <div className="col-4 text-center d-flex align-items-center justify-content-center ">
                  <p></p>
                  <p className="mb-0">
                    {" "}
                    {this.state.winner === "tie"
                      ? "You have a tie"
                      : this.state.winner + " won!"}
                  </p>
                </div>
                <div className="col-4 text-center">
                  <p>Computer:</p>
                  <p className="m-2 ">
                    <span className="buttonBox"> {this.state.computer}</span>
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="row mt-2">
            <div className="col-12">
              <button
                className="buttonPink m-2 border rounded"
                onClick={this.playGame}
              >
                Play again
              </button>
              <button
                className="buttonPink m-2 border rounded"
                onClick={this.resetGame}
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
                <tr>
                  <td> Player </td>
                  <td width="30"> &nbsp; </td>
                  <td> Computer </td>
                  <td width="30"> &nbsp; </td>
                  <td> Tie </td>
                </tr>
                <tr>
                  <td>{this.state.playerScore}</td>
                  <td> &nbsp; </td>
                  <td>{this.state.computerScore}</td>
                  <td> &nbsp; </td>
                  <td>{this.state.tie}</td>
                </tr>
              </table>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default App;
