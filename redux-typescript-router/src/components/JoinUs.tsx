import React from 'react';
import { Link } from 'react-router-dom';

import './joinus.css';

const JoinUs = () => {
  return (
    <div className="join-us-container">
      <div className="section">
        <div className="left-column">
          <h2>Register as Trainer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac justo ac lorem finibus consectetur.
          </p>
          <Link to="/registerTrainer">
            <button className="join-button">Join Us</button>
          </Link>
        </div>
        <div className="right-column">
          <img src="trainer-image.jpg" alt="Trainer" />
        </div>
      </div>
      <div className="section">
        <div className="left-column">
          <h2>Register as Student</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac justo ac lorem finibus consectetur.
          </p>
          <Link to="/registerStudent">
            <button className="join-button">Join Us</button>
          </Link>
        </div>
        <div className="right-column">
          <img src="student-image.jpg" alt="Student" />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;