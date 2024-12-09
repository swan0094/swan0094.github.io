import React from "react";

const PlayerCard = ({ player, onClick }) => {
  return (
    <div className="player-card" onClick={() => onClick(player)}>
      <img src={player.profileImage} alt={`${player.name} profile`} />
      <div className="player-name">{player.name}</div>
    </div>
  );
};

export default PlayerCard;
