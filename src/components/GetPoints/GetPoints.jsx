import { useState } from "react";
import "./GetPoints.scss";

const GetPoints = ({ playerNames, getPoints, getRound, getWinner }) => {
  const [points, setPoints] = useState(Array(playerNames.length).fill(""));

  const submitPoints = (e) => {
    e.preventDefault();

    getPoints(points.map(Number));
    setPoints(Array(playerNames.length).fill(""));

    // Calculate the next round number
    getRound((prevRound) => prevRound + 1);
  };

  const calculatePoints = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form id="points-form" onSubmit={submitPoints} className="points-form">
        {playerNames.map((player, index) => (
          <div key={index}>
            <label name={player}>
              {player} cards left
              <input
                className="points-input"
                name={player}
                type="number"
                value={points[index]}
                onChange={(e) => {
                  const newPoints = [...points];
                  newPoints[index] = e.target.value;
                  setPoints(newPoints);
                }}
              />
            </label>
            <button
              type="button"
              onClick={(e) => {
                getWinner(player);
              }}
            >
              Round Winner
            </button>
          </div>
        ))}
        <button type="submit">Enter points</button>
      </form>
    </>
  );
};

export default GetPoints;
