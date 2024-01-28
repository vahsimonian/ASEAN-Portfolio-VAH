import React from 'react';
import myImg from '../assets/vah.png';
import ReactPlayer from 'react-player';
import youtubeIcon from '../assets/youtube-icon.png';
import { NavLink } from 'react-router-dom';
import githubIcon from '../assets/github.png';
import cvPdf from '../assets/CV.pdf';

const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'downloaded.pdf'; // The default filename for the download
    link.click();
  };

  return (
    <div className="about-page">
      <div className="im-vah">
        <h1>Hi, friend </h1>
        <h1>
          I'm <span>Vah</span>{' '}
        </h1>
        <p>React js web-developer</p>
      </div>

      <div className="img-greeting">
        <img src={myImg} alt="logo" className="vah-logo" />
        <div className="greeting">
          <p>Thanks for coming to my page</p>
          <p>Here you'll find all about me</p>
        </div>
      </div>
      <div className="youtube">
        <ReactPlayer
          width={200}
          height={300}
          // className="video-youtube"
          url={'https://www.youtube.com/shorts/ojVgMk-2-TE'}
        />
        <div className="home-icons">
          <img className="youtube-icon" src={youtubeIcon} alt="youtube" />
          <NavLink
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? 'rgb(180, 180, 180)' : '#fff',
            })}
            to={'https://www.youtube.com/channel/UCz6sUwLNSkB7V-Cp-nCQFqQ'}
            target="_blank"
          >
            <p>subscribe</p>
            <img className="github-icon" src={githubIcon} alt="youtube" />
            <p>github</p>
            <button className="download-btn" onClick={handleDownload}>
              Download pdf
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default About;
