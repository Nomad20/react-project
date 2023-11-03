import React from 'react';
import { Link } from 'react-router-dom';

import './home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="start-learning-text">Let's start learning</h1>
      <p className="welcome-text">
        Welcome to Learn Platform - where every day is a day to learn. Dive into the vast ocean of knowledge and empower yourself with the tools for a successful tomorrow. Happy learning!
      </p>
      <div className="join-us-container">
        <p>
          Join us<br />
          Qui ut exorcitation o•tficia anim non tempor ipswn ex nulla eo sn consequot enim cupídatat o
        </p>
        <Link to="/joinus">
          <button className="join-button">Join Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
