import { useState } from "react";
import AddPlayer from "./components/AddPlayer/AddPlayer";
import GetPoints from "./components/GetPoints/GetPoints";
import Points from "./components/Points/Points";
import "./App.scss";

function App() {
  const [playerNames, setPlayerNames] = useState([]);
  const [addPlayers, setAddPlayers] = useState(true);
  const [gameDetails, setGameDetails] = useState({
    playerPoints: [0, 0, 0, 0],
    round: 0,
    winnerName: "",
  });

  // Function to get player data from AddPlayer component
  const getPlayerData = (playerList) => {
    setPlayerNames(playerList);
  };

  // Function to get game details
  const getGameDetails = (points, newRound, winner) => {
    setGameDetails({
      playerPoints: points,
      round: newRound,
      winnerName: winner,
    });
  };

  // Function to reset game
  const resetGame = () => {
    confirm("Do you want to reset the game?");
    setAddPlayers(true);
    setGameDetails({ playerPoints: [0, 0, 0, 0], round: 0, winnerName: "" });
  };

  return (
    <>
      {addPlayers && (
        <AddPlayer
          getPlayerData={getPlayerData}
          setAddPlayers={setAddPlayers}
        />
      )}

      {!addPlayers && (
        <GetPoints playerNames={playerNames} getGameDetails={getGameDetails} />
      )}

      {!addPlayers && (
        <Points
          playerNames={playerNames}
          gameDetails={gameDetails} // Pass the gameDetails object
        />
      )}

      {/* Button to reset player list */}
      {!addPlayers && (
        <button
          className="reset-button"
          onClick={() => {
            resetGame();
          }}
        >
          Reset Game
        </button>
      )}
    </>
  );
}

export default App;
