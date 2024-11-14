import { useState } from "react";
import "./GetPoints.scss";

const GetPoints = ({ playerNames, getGameDetails, gameDetails }) => {
  // Use a single object to store both points and winner
  const [roundDetails, setRoundDetails] = useState({
    points: Array(playerNames.length).fill(""),
    winner: "",
  });
  const [editRound, setEditRound] = useState(false);
  const [editRoundNumber, setEditRoundNumber] = useState("");

  const submitPoints = (e) => {
    e.preventDefault();

    // If there's no winner prevent submission
    if (!roundDetails.winner) return;

    // Sets winner to 0 points
    const winnerIndex = playerNames.indexOf(roundDetails.winner);
    const updatedPoints = [...roundDetails.points];
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

    console.log(editRoundNumber);

    getGameDetails(
      calculatePoints,
      roundDetails.winner,
      editRound,
      editRoundNumber
    );

    // Resets points to blank
    setRoundDetails({ points: Array(playerNames.length).fill(""), winner: "" });
    setEditRound(false);
  };

  const handlePointsChange = (e, index) => {
    const newPoints = [...roundDetails.points];
    newPoints[index] = Number(e.target.value);
    setRoundDetails((prevState) => ({ ...prevState, points: newPoints }));
  };

  const handleSetWinner = (player) => {
    setRoundDetails((prevState) => ({ ...prevState, winner: player }));
  };

  const editRoundDiv = () => {
    // Shows div to choose round number to edit
    setEditRound(true);
  };

  const editRoundChooser = (e) => {
    setEditRoundNumber(e.target.value);
  };

  const roundsArray = Array.from(
    { length: gameDetails.round },
    (_, index) => index + 1
  );

  return (
    <form id="points-form" onSubmit={submitPoints} className="points-form">
      {editRound && (
        <div className="points-form__edit-wrapper">
          <h3 className="points-form__edit-text">Choose round to edit: </h3>
          <select
            name="roundNumber"
            id="roundNumber"
            value={editRoundNumber}
            onChange={editRoundChooser}
          >
            {roundsArray.map((round) => {
              return (
                <option value={round} key={round}>
                  {round}
                </option>
              );
            })}
          </select>
        </div>
      )}
      <div className="points-form__wrapper">
        {playerNames.map((player, index) => {
          // Conditionally applying a special class for the winner
          const isWinner = player === roundDetails.winner;

          return (
            <>
              <div key={index} className="points-form__player">
                <label className="points-form__label">
                  {player} cards left:
                  <input
                    className="points-form__input"
                    disabled={
                      !roundDetails.winner ||
                      (isWinner && roundDetails.winner !== "")
                    }
                    type="text"
                    required
                    value={roundDetails.points[index]}
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
            </>
          );
        })}
      </div>
      <div className="points-form__button-wrapper">
        <button type="submit" className="points-form__submit-button">
          Enter points
        </button>
        <button
          className="points-form__edit-button"
          onClick={() => {
            editRoundDiv();
          }}
        >
          <img
            src="./public/icons/edit.svg"
            alt="edit-button"
            className="points-form__edit-icon"
          />
        </button>
      </div>
    </form>
  );
};

export default GetPoints;
