import React from "react";

const VideoModal = ({ show, handleClose, children }) => {
  const handleClickOutside = () => {
    handleClose();
  };

  return (
    <div
      className={`video-modal ${show ? "show" : ""}`}
      onClick={handleClickOutside}
    >
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default VideoModal;
