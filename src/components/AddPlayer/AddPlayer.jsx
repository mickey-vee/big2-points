import "./AddPlayer.scss";
import { useState } from "react";

const AddPlayer = ({ getPlayerData, setAddPlayers }) => {
  const [p1, setP1] = useState("1");
  const [p2, setP2] = useState("2");
  const [p3, setP3] = useState("3");
  const [p4, setP4] = useState("4");

  const submitForm = (e) => {
    e.preventDefault();

    const playerList = [p1, p2, p3, p4];

    // Takes playerData as prop/function from app.jsx and passes player data from form to function
    getPlayerData(playerList);
    setAddPlayers(false);
  };

  return (
    <>
      <div>
        <form onSubmit={submitForm}>
          <label>
            Player 1
            <input
              onChange={(e) => {
                setP1(e.target.value);
              }}
              type="text"
              name="p1"
            />
          </label>
          <label>
            Player 2
            <input
              onChange={(e) => {
                setP2(e.target.value);
              }}
              type="text"
              name="p2"
            />
          </label>
          <label>
            Player 3
            <input
              onChange={(e) => {
                setP3(e.target.value);
              }}
              type="text"
              name="p3"
            />
          </label>
          <label>
            Player 4
            <input
              onChange={(e) => {
                setP4(e.target.value);
              }}
              type="text"
              name="p4"
            />
          </label>
          <button type="submit">Enter</button>
        </form>
      </div>
    </>
  );
};

export default AddPlayer;
