import { useState } from "react";
import "./GetPoints.scss";

const GetPoints = ({ playerNames, getPoints, getRound, getWinner }) => {
  const [points, setPoints] = useState(Array(playerNames.length).fill(""));
  const [winner, setWinner] = useState("");

  const submitPoints = (e) => {
    e.preventDefault();
    getPoints(points.map(Number));
    setPoints(Array(playerNames.length).fill(""));
    getRound((prevRound) => prevRound + 1);
  };

  return (
    <>
      <form id="points-form" onSubmit={submitPoints} className="points-form">
        {playerNames.map((player, index) => {
          // Conditionally applying a special class for the winner
          const isWinner = player === winner;

          return (
            <div key={index}>
              <label name={player}>
                {player} cards left:
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
                className={isWinner ? "winner-button" : ""}
                type="button"
                onClick={() => {
                  getWinner(player);
                  setWinner(player);
                }}
              >
                Round Winner
              </button>
            </div>
          );
        })}
        <button type="submit">Enter points</button>
      </form>
    </>
  );
};

export default GetPoints;
