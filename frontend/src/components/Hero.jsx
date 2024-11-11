import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Welcome to our clinic, where your health and well-being are our top priorities. We are dedicated to providing compassionate, high-quality care tailored to each patient’s needs. Booking an appointment with us is easy and convenient—just select your preferred date and time, and our team will ensure a smooth, personalized experience. Whether you’re here for a routine check-up, a specialized consultation, or ongoing care, we aim to make each visit comfortable and stress-free. With our expert team and modern facilities, you can trust us to support your health journey with professionalism, empathy, and respect.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
