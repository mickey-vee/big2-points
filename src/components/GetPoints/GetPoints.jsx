import { useState } from "react";
import "./GetPoints.scss";

const GetPoints = ({ playerNames, getPoints }) => {
  const [points, setPoints] = useState([0, 0, 0, 0]);

  const submitPoints = (e) => {
    e.preventDefault();
    getPoints(points);
    console.log(points);
  };

  return (
    <>
      <form onSubmit={submitPoints} className="points-form">
        {/*    Map over player list array to display players */}
        {playerNames.map((player, index) => (
          <>
            <div>
              <label name={player} key={index}>
                {player} cards left
                <input
                  className="points-input"
                  name={player}
                  type="number"
                  /* Create spread of points array to assign new values */
                  onChange={(e) => {
                    const newPoints = [...points];
                    newPoints[index] = e.target.value;
                    setPoints(newPoints);
                  }}
                />
              </label>
            </div>
          </>
        ))}
        <button type="submit">Enter points</button>
      </form>
    </>
  );
};

export default GetPoints;
