import { useState } from "react";
import "./GetPoints.scss";

const GetPoints = ({ playerNames, getPoints, getRound, getWinner }) => {
  const [points, setPoints] = useState(Array(playerNames.length).fill(""));
  const [winner, setWinner] = useState("");

  const submitPoints = (e) => {
    e.preventDefault();

    // Updates points for all players
    let calculatePoints = points.map((point) => {
      if (Number(point) === 0) {
        return points.reduce(
          (accumulator, currentValue) => accumulator + Number(currentValue),
          0
        );
      } else {
        return point * -1;
      }
    });

    // Sends point info to points component
    getPoints(calculatePoints);

    // Resets points to 0
    setPoints(Array(playerNames.length).fill(""));
    getRound((prevRound) => prevRound + 1);
  };

  return (
    <>
      <form id="points-form" onSubmit={submitPoints} className="points-form">
        <div className="points-form__wrapper">
          {playerNames.map((player, index) => {
            // Conditionally applying a special class for the winner
            const isWinner = player === winner;

            return (
              <div key={index} className="points-form__player">
                <label className="points-form__label">
                  {player} cards left:
                  <input
                    className="points-form__input"
                    disabled={!winner || (isWinner && winner !== "")}
                    type="number"
                    value={points[index]}
                    onChange={(e) => {
                      const newPoints = [...points];
                      newPoints[index] = Number(e.target.value);
                      setPoints(newPoints);
                    }}
                  />
                </label>
                <button
                  className={`points-form__button ${
                    isWinner ? "points-form__button--winner" : ""
                  }`}
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
        </div>

        <button type="submit" className="points-form__submit-button">
          Enter points
        </button>
      </form>
    </>
  );
};

export default GetPoints;
