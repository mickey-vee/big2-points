import { useState } from "react";
import AddPlayer from "./components/AddPlayer/AddPlayer";
import PlayerList from "./components/PlayerList/PlayerList";

function App() {
  const [playerNames, setPlayerNames] = useState([]);

  // Function to get player data from AddPlayer component
  const getPlayerData = (playerList) => {
    setPlayerNames(playerList);
  };

  return (
    <>
      <AddPlayer getPlayerData={getPlayerData} />
      <PlayerList playerNames={playerNames} />
    </>
  );
}

export default App;
