import "./PlayerList.scss";

const PlayerList = ({ playerNames }) => {
  return (
    <>
      <section>
        <h2>Player Names:</h2>
        {/*    Map over player list array to display players */}
        {playerNames.map((player, index) => (
          <p key={index}>
            Player {index + 1}: {player}
          </p>
        ))}
      </section>
    </>
  );
};

export default PlayerList;
