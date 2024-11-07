import { useState } from "react";
import "./GetPoints.scss";

const GetPoints = ({ playerNames, getGameDetails }) => {
  // Use a single object to store both points and winner
  const [gameDetails, setGameDetails] = useState({
    points: Array(playerNames.length).fill(""),
    winner: "",
  });

  const submitPoints = (e) => {
    e.preventDefault();

    // If there's no winner prevent submission
    if (!gameDetails.winner) return;

    // Sets winner to 0 points
    const winnerIndex = playerNames.indexOf(gameDetails.winner);
    const updatedPoints = [...gameDetails.points];
    updatedPoints[winnerIndex] = 0;

    // Updates points for all players
    let calculatePoints = updatedPoints.map((point, index) => {
      if (index === winnerIndex) {
        return updatedPoints.reduce(
          (accumulator, currentValue) => accumulator + Number(currentValue),
          0
        );
      } else {
        return point * -1;
      }
    });

    // Resets points to blank
    setGameDetails({ points: Array(playerNames.length).fill(""), winner: "" });

    getGameDetails(calculatePoints, gameDetails.winner);
  };

  const handlePointsChange = (e, index) => {
    const newPoints = [...gameDetails.points];
    newPoints[index] = Number(e.target.value);
    setGameDetails((prevState) => ({ ...prevState, points: newPoints }));
  };

  const handleSetWinner = (player) => {
    setGameDetails((prevState) => ({ ...prevState, winner: player }));
  };

  return (
    <form id="points-form" onSubmit={submitPoints} className="points-form">
      <div className="points-form__wrapper">
        {playerNames.map((player, index) => {
          // Conditionally applying a special class for the winner
          const isWinner = player === gameDetails.winner;

          return (
            <div key={index} className="points-form__player">
              <label className="points-form__label">
                {player} cards left:
                <input
                  className="points-form__input"
                  disabled={
                    !gameDetails.winner ||
                    (isWinner && gameDetails.winner !== "")
                  }
                  type="text"
                  required
                  value={gameDetails.points[index]}
                  onChange={(e) => handlePointsChange(e, index)}
                />
              </label>
              <button
                className={`points-form__button ${
                  isWinner ? " points-form__button--winner" : ""
                }`}
                type="button"
                onClick={() => handleSetWinner(player)}
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
  );
};

export default GetPoints;
