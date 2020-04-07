import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element: ["paper", "scissors", "rock"],
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
    if (index === 0) return "paper";
    else if (index === 1) return "scissors";
    else return "rock";
  };

  getWinner = (player, computer) => {
    if (player === computer) {
      return "tie";
    } else if (player === "rock") {
      if (computer === "scissors") {
        return "player";
      } else {
        return "computer";
      }
    } else if (player === "scissors") {
      if (computer === "paper") {
        return "player";
      } else {
        return "computer";
      }
    } else if (player === "paper") {
      if (computer === "rock") {
        return "player";
      } else {
        return "computer";
      }
    }
  };

  playGame = () => {
    this.setState({
      winner: "unknown",
    });
  };

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
      <div className="App">
        <header className="App-header">
          <h1>Rock, Paper, Scissors!</h1>
          <div className="container">
            <p>Play against the computer! Press any button to start.</p>

            {this.state.winner === "unknown" ? (
              <div className="row">
                <div className="col-12">
                  <button
                    onClick={this.handleChoice}
                    name="user"
                    value={"rock"}
                    className="m-2 buttonGrayRounded"
                  >
                    ✊
                  </button>
                  <button
                    onClick={this.handleChoice}
                    name="user"
                    value={"paper"}
                    className="m-2 buttonGrayRounded"
                  >
                    ✋
                  </button>

                  <button
                    onClick={this.handleChoice}
                    name="user"
                    value={"scissors"}
                    className="m-2 buttonGrayRounded"
                  >
                    ✌️
                  </button>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-6 text-center">
                  <p>{this.state.player}</p>
                </div>
                <div className="col-6 text-center">
                  <p>{this.state.computer}</p>
                </div>
                <div className="col-12 text-center">
                  <p>{this.state.winner} won!</p>
                </div>
              </div>
            )}
          </div>
          <button className="btn btn-dark m-2" onClick={this.playGame}>
            Play again!
          </button>
          <div className="row">
            <div className="col-12">
              Score
              <table id="scoreboard" align="center">
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
