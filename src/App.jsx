import { useState } from "react";
import AddPlayer from "./components/AddPlayer/AddPlayer";
import PlayerList from "./components/PlayerList/PlayerList";
import GetPoints from "./components/GetPoints/GetPoints";

function App() {
  const [playerNames, setPlayerNames] = useState([]);
  const [addPlayers, setAddPlayers] = useState(true);
  const [playerPoints, setPlayerPoints] = useState([0, 0, 0, 0]);

  // Function to get player data from AddPlayer component
  const getPlayerData = (playerList) => {
    setPlayerNames(playerList);
  };

  // Function to get points from GetPoints component
  const getPoints = (points) => {
    setPlayerPoints(points);
  };

  // Function to reset game
  const resetGame = () => {
    confirm("Do you want to reset the game?");
    setAddPlayers(true);
  };

  return (
    <>
      {addPlayers && (
        <AddPlayer
          getPlayerData={getPlayerData}
          setAddPlayers={setAddPlayers}
        />
      )}
      {/*      <PlayerList playerNames={playerNames} /> */}

      {!addPlayers && (
        <GetPoints playerNames={playerNames} getPoints={getPoints} />
      )}

      {/* Button to reset player list */}
      <button
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
