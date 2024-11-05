import { useState } from "react";
import AddPlayer from "./components/AddPlayer/AddPlayer";
import PlayerList from "./components/PlayerList/PlayerList";

function App() {
  const [playerNames, setPlayerNames] = useState([]);
  const [addPlayers, setAddPlayers] = useState(true);

  // Function to get player data from AddPlayer component
  const getPlayerData = (playerList) => {
    setPlayerNames(playerList);
  };

  return (
    <>
      {addPlayers && (
        <AddPlayer
          getPlayerData={getPlayerData}
          setAddPlayers={setAddPlayers}
        />
      )}
      <PlayerList playerNames={playerNames} />
      {/* Button to reset player list */}
      <button
        onClick={() => {
          setAddPlayers(true);
        }}
      >
        Reset
      </button>
    </>
  );
}

export default App;
