import React, { useState, useEffect } from "react";
import playersData from "../data/players.json";
import PlayerCard from "../components/player_card";
import Modal from "../components/modal";

const PlayerProfile = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    setPlayers(playersData);
  }, []);

  const handlePlayerClick = (player) => {
    const updatedPlayer = {
      ...player,
      galleryImages: player.galleryImages.map((image) => ({
        ...image,
        originalLikes: image.likes,
      })),
    };
    setSelectedPlayer(updatedPlayer);
  };

  const handleBackClick = () => {
    setSelectedPlayer(null);
  };

  const handleLikeClick = (imageIndex) => {
    const updatedPlayer = { ...selectedPlayer };
    const image = updatedPlayer.galleryImages[imageIndex];
    image.likes =
      image.likes === image.originalLikes
        ? image.likes + 1
        : image.originalLikes;
    setSelectedPlayer(updatedPlayer);
  };

  const handleCommentClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setComment(""); // Clear the comment field
  };

  const handleSubmitComment = () => {
    setShowModal(false);
    setShowConfirmationModal(true);
    setComment(""); // Clear the comment field
  };

  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  return (
    <div aria-labelledby="player-profile-page">
      {!selectedPlayer && <h2>Player Profiles</h2>}
      {selectedPlayer ? (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <button onClick={handleBackClick} className="back-button">
              <span style={{ marginRight: 8 }}>←</span> Back
            </button>
            <h2 style={{ flexGrow: 1, textAlign: "center", marginBottom: 40 }}>
              Player Overview
            </h2>
            <div style={{ width: "75px" }}></div>{" "}
            {/* Placeholder to keep the title centered */}
          </div>
          <div className="player-info" aria-labelledby="player-info-title">
            <div>
              <p className="highlightable">
                <strong>Name:</strong> {selectedPlayer.name}
              </p>
              <p className="highlightable">
                <strong>Position:</strong> {selectedPlayer.position}
              </p>
              <p className="highlightable">
                <strong>Team:</strong> {selectedPlayer.team}
              </p>
              <p className="highlightable">
                <strong>Birthdate:</strong> {selectedPlayer.birthdate}
              </p>
              <p className="highlightable">
                <strong>Nationality:</strong> {selectedPlayer.nationality}
              </p>
            </div>
            <div className="player-photo">
              <img
                src={selectedPlayer.profileImage}
                alt={`${selectedPlayer.name} profile`}
                className="profile-img"
              />
            </div>
          </div>
          <div className="gallery">
            {selectedPlayer.galleryImages.map((image, index) => (
              <div className="image-card" key={index}>
                <img src={image.src} alt={image.alt} className="gallery-img" />
                <div className="image-actions">
                  <button
                    className={`like-button ${
                      image.likes !== image.originalLikes ? "liked" : ""
                    }`}
                    aria-label="Like this image"
                    style={{ margin: 20 }}
                    onClick={() => handleLikeClick(index)}
                  >
                    👍 Like - {image.likes}
                  </button>
                  <button
                    className="comment-button"
                    aria-label="Comment on this image"
                    onClick={handleCommentClick}
                  >
                    💬 Comment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="player-profile-list">
          <h3>Select a player to view their profile</h3>
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              onClick={handlePlayerClick}
            />
          ))}
        </div>
      )}
      <Modal show={showModal} handleClose={handleCloseModal}>
        <h2>Submit a Comment</h2>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          style={{ width: "100%", height: "100px", marginBottom: "20px" }}
        ></textarea>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button className="cancel-button" onClick={handleCloseModal}>
            Cancel
          </button>
          <button onClick={handleSubmitComment}>Submit</button>
        </div>
      </Modal>
      <Modal
        show={showConfirmationModal}
        handleClose={handleCloseConfirmationModal}
      >
        <p className="highlightable">
          Comment sent for review, once approved it will be published
        </p>
        <button onClick={handleCloseConfirmationModal}>Ok</button>
      </Modal>
    </div>
  );
};

export default PlayerProfile;
