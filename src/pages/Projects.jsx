import '../App.css';
import React from 'react';
import bictoinsImg from '../assets/bitcoins-project.png';
import phonesImg from '../assets/phones-project.png';
import pizzasImg from '../assets/pizzas-project.png';
import vansImg from '../assets/vans-project.png';
import { Link } from 'react-router-dom';

const TeachingProgram = () => {
  return (
    <div className="projects-page">
      <h1>
        Welcome to my <span className="projects-span">Projects</span> page
      </h1>
      <p>
        If you find this
        <span className="projects-span"> interesting, let </span>me know
      </p>
      <div className="projects-container">
        <Link to={''}>
          <img className="projects-img" src={bictoinsImg} alt="bictoins" />
        </Link>
        <Link to={''}>
          <img className="projects-img" src={phonesImg} alt="phones" />
        </Link>
        <Link to={''}>
          <img className="projects-img" src={pizzasImg} alt="pizzas" />
        </Link>
        <Link to={''}>
          <img className="projects-img" src={vansImg} alt="vans" />
        </Link>
      </div>
      {/* Add detailed program information here */}
    </div>
  );
};

export default TeachingProgram;
