import { useState } from "react";
import AddPlayer from "./components/AddPlayer/AddPlayer";
import GetPoints from "./components/GetPoints/GetPoints";
import Points from "./components/Points/Points";
import Header from "./components/Header/Header";
import "./App.scss";

function App() {
  const [playerNames, setPlayerNames] = useState([]);
  const [addPlayers, setAddPlayers] = useState(true);
  const [playerPoints, setPlayerPoints] = useState([0, 0, 0, 0]);
  const [round, setRounds] = useState(0);
  const [winnerName, setWinnerName] = useState("");

  // Function to get player data from AddPlayer component
  const getPlayerData = (playerList) => {
    setPlayerNames(playerList);
  };

  // Function to get points from GetPoints component
  const getPoints = (points) => {
    setPlayerPoints(points);
  };

  //Function to get round number
  const getRound = (newRound) => {
    setRounds(newRound);
  };

  //Function to get winner
  const getWinner = (winner) => {
    setWinnerName(winner);
  };

  // Function to reset game
  const resetGame = () => {
    confirm("Do you want to reset the game?");
    setAddPlayers(true);
  };

  return (
    <>
      <Header />
      {addPlayers && (
        <AddPlayer
          getPlayerData={getPlayerData}
          setAddPlayers={setAddPlayers}
        />
      )}

      {!addPlayers && (
        <GetPoints
          playerNames={playerNames}
          getPoints={getPoints}
          getRound={getRound}
          getWinner={getWinner}
        />
      )}

      {!addPlayers && (
        <Points
          playerNames={playerNames}
          playerPoints={playerPoints}
          round={round}
          winnerName={winnerName}
        />
      )}

      {/* Button to reset player list */}
      <button
        className="reset-button"
        onClick={() => {
          resetGame();
        }}
      >
        Reset Game
      </button>
    </>
  );
}

export default App;
