import { useState } from "react";
import "./GetPoints.scss";

const GetPoints = ({ playerNames, getPoints }) => {
  const [points, setPoints] = useState(Array(playerNames.length).fill(""));

  const submitPoints = (e) => {
    e.preventDefault();

    getPoints(points.map(Number));
    setPoints(Array(playerNames.length).fill(""));
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
          </div>
        ))}
        <button type="submit">Enter points</button>
      </form>
    </>
  );
};

export default GetPoints;
