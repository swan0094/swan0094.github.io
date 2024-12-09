import React, { useState, useEffect } from "react";
import playerUpdatesData from "../data/player_updates.json";

const PlayerUpdates = () => {
  const [playerUpdates, setPlayerUpdates] = useState([]);

  useEffect(() => {
    setPlayerUpdates(playerUpdatesData);
  }, []);

  return (
    <div aria-labelledby="player-updates-page">
      <section id="player-status" aria-labelledby="player-status-title">
        <h2 id="player-status-title">Player Updates and Recovery</h2>
        <p className="highlightable">
          Stay up-to-date with the health status and recovery progress of your
          favorite AFC players.
        </p>
        {playerUpdates.map((player) => (
          <div key={player.id} className="player-info player-info-left-aligned">
            <img
              src={player.profileImage}
              alt={`${player.name} profile`}
              className="player-photo"
            />
            <div>
              <h3>Player: {player.name}</h3>
              <p className="highlightable">
                <strong>Status:</strong>{" "}
                <span id="status"> {player.status}</span>
              </p>
              <p className="highlightable">
                <strong>Recovery stage:</strong>
                <span id="recovery-stage"> {player.recoveryStage}</span>
              </p>
              <p className="highlightable">
                <strong>Next Match Availability:</strong>
                <span id="availability"> {player.nextMatchAvailability}</span>
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PlayerUpdates;
