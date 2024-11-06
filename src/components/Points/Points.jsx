import { useEffect, useState } from "react";
import "./Points.scss";

const Points = ({ playerNames, playerPoints, round, winnerName }) => {
  const [totalPoints, setTotalPoints] = useState(
    Array(playerNames.length).fill(0)
  );
  const [roundDetails, setRoundDetails] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setTotalPoints((prevPoints) =>
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

  useEffect(() => {
    if (roundDetails && roundDetails.winner) {
      setHistory((prevHistory) => {
        return [...prevHistory, roundDetails];
      });
    }
  }, [roundDetails]);

  useEffect(() => {
    console.log(history);
  }, [history]);

  return (
    <>
      <div className="rounds">
        {history.map((item, index) => (
          <div key={index} className="rounds-card">
            <p className="rounds-title">
              Round {item.round} winner - {item.winner}
            </p>
            <div className="rounds-player-info">
              {item.playerdetails.map((player) => {
                return (
                  <div key={player + 1}>
                    <p>{player.playername}</p>
                    <p>{player.playerpoints}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="rounds-card">
          <p className="rounds-title">Total points</p>
          <div className="rounds-player-info">
            {playerNames.map((player, index) => (
              <div key={index}>
                <p>{player} total</p>
                <p>{totalPoints[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Points;
