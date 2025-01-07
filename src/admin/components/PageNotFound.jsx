import React from "react";
import { Link } from "react-router-dom";
import { FaSadTear } from "react-icons/fa";
import notFoundImage from "../../assets/wrench100.png";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <img src={notFoundImage} alt="404 Not Found" style={styles.image} />
      <h1 style={styles.heading}>
        404 <FaSadTear style={styles.icon} />
      </h1>
      <p style={styles.message}>
        Oops! We can't seem to find the page you're looking for.
      </p>
      <Link to="/dashboard" style={styles.link}>
        Go Back to Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    color: "#333",
    fontFamily: "Arial, sans-serif",
  },
  image: {
    width: "100px",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "64px",
    marginBottom: "10px",
  },
  icon: {
    color: "#FF6B6B",
    marginLeft: "10px",
  },
  message: {
    fontSize: "18px",
    marginBottom: "30px",
    color: "#555",
  },
  link: {
    fontSize: "16px",
    color: "#007BFF",
    textDecoration: "none",
  },
};

export default NotFound;
