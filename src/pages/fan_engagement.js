import React, { useState, useEffect } from "react";
import Modal from "../components/modal";
import fanEngagementData from "../data/fan_engagement.json";

const FanEngagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(fanEngagementData);
  }, []);

  const handleDownload = () => {
    // Simulate download action
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="fan-engagement-card" aria-labelledby="fan-engagement-page">
      <h2>Fan Engagement &amp; Membership Overview</h2>
      <table aria-describedby="fan-engagement-table" role="table">
        <thead>
          <tr>
            <th scope="col">Season</th>
            <th scope="col">Ticket Sales</th>
            <th scope="col">Fan Interactions</th>
            <th scope="col">Merchandise Revenue</th>
            <th scope="col">Video Plays</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.season}</td>
              <td>{row.ticketSales.toLocaleString()}</td>
              <td>{row.fanInteractions.toLocaleString()}</td>
              <td>${row.merchandiseRevenue.toLocaleString()}</td>
              <td>{row.videoPlays.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        aria-label="Download the full fan engagement report"
        onClick={handleDownload}
      >
        Download Full Report
      </button>
      <Modal show={showModal}>
        <p className="highlightable">Downloaded successfully</p>
        <button onClick={handleCloseModal} className="ok-button">
          Ok
        </button>
      </Modal>
    </div>
  );
};

export default FanEngagement;
