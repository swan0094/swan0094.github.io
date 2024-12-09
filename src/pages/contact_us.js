import React, { useState } from "react";
import Modal from "../components/modal";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(updatedFormData);

    if (
      updatedFormData.name &&
      updatedFormData.email &&
      updatedFormData.message
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setButtonDisabled(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div aria-labelledby="contact-us-page">
      <section>
        <h2>Contact Adelaide Football Club</h2>
        <p className="highlightable">
          Have any questions or feedback? We would love to hear from you!
          <br />
          Please fill out the form below, and we will get back to you as soon as
          possible.
        </p>
        <form onSubmit={handleSubmit} id="contact-form">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required=""
            placeholder="Enter your name"
            aria-required="true"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required=""
            placeholder="Enter your email"
            aria-required="true"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required=""
            placeholder="Write your message"
            aria-required="true"
            style={{ marginBottom: 24 }}
            value={formData.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="submit-button"
            disabled={buttonDisabled}
          >
            Submit
          </button>
        </form>
      </section>
      <Modal show={showModal} handleClose={handleCloseModal}>
        <p className="highlightable">Message sent successfully</p>
        <button onClick={handleCloseModal} className="ok-button">
          Ok
        </button>
      </Modal>
    </div>
  );
};

export default ContactUs;
