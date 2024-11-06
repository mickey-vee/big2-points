import { useEffect, useState } from "react";
import "./Points.scss";

const Points = ({ playerNames, playerPoints, round, winnerName }) => {
  const [newPoints, setNewPoints] = useState(Array(playerNames.length).fill(0));

  const [roundDetails, setRoundDetails] = useState([]);

  useEffect(() => {
    setNewPoints((prevPoints) =>
      prevPoints.map((point, index) => point + (playerPoints[index] || 0))
    );

    let playerDetails = playerNames.map((player, index) => ({
      playername: player,
      playerpoints: playerPoints[index],
    }));

    setRoundDetails({
      winner: winnerName,
      round: round,
      playerdetails: playerDetails,
    });
  }, [playerPoints]);

  return (
    <>
      <div>
        <p>
          Round {round} - Winner {roundDetails.winner}
        </p>
      </div>

      <section>
        <p>Total points</p>
        {playerNames.map((player, index) => (
          <div key={index}>
            <p>
              {player} total points: {newPoints[index]}
            </p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Points;
