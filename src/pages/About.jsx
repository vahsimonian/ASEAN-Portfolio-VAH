import React from 'react';
import myImg from '../assets/vah.png';

const About = () => {
  return (
    <div className="about-page">
      <h1>Hi, friend</h1>
      <img src={myImg} alt="logo" className="vah-logo" />
      <p>Thanks for coming to my page</p>
      <p>Here you'll find all about me</p>
    </div>
  );
};

export default About;
