import { useEffect, useState } from "react";
import "./Points.scss";

const Points = ({ playerNames, playerPoints, round, winnerName }) => {
  const [newPoints, setNewPoints] = useState(Array(playerNames.length).fill(0));

  useEffect(() => {
    setNewPoints((prevPoints) =>
      prevPoints.map((point, index) => point + (playerPoints[index] || 0))
    );
  }, [playerPoints]);

  return (
    <>
      <div>
        <p>
          Round {round}, Winner {winnerName}
        </p>
        {playerNames.map((player, index) => (
          <div key={index}>
            <p>
              {player} round points: {playerPoints[index]}
            </p>
          </div>
        ))}
      </div>

      {playerNames.map((player, index) => (
        <div key={index}>
          <p>
            {player} total points: {newPoints[index]}
          </p>
        </div>
      ))}
    </>
  );
};

export default Points;
