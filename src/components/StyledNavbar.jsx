import '../App.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import myImage from '../assets/vah.png';
import githubIcon from '../assets/github.png';

const StyledNavbar = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <NavLink
            aria-current="page"
            to="/"
            style={({ isActive }) => ({
              color: isActive ? 'rgb(180, 180, 180)' : '#fff',
            })}
            className="navbar-item"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            aria-current="page"
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? 'rgb(180, 180, 180)' : '#fff',
            })}
            className="navbar-item"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            aria-current="page"
            to="/my-works"
            style={({ isActive }) => ({
              color: isActive ? 'rgb(180, 180, 180)' : '#fff',
            })}
            className="navbar-item"
          >
            My Works
          </NavLink>
        </li>
        <li>
          <NavLink
            aria-current="page"
            to="/teachingprogram"
            style={({ isActive }) => ({
              color: isActive ? 'rgb(180, 180, 180)' : '#fff',
            })}
            className="navbar-item"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            aria-current="page"
            to="/contacts"
            style={({ isActive }) => ({
              color: isActive ? 'rgb(180, 180, 180)' : '#fff',
            })}
            className="navbar-item"
          >
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink
            aria-current="page"
            to="/more"
            style={({ isActive }) => ({
              color: isActive ? 'rgb(180, 180, 180)' : '#fff',
            })}
            className="navbar-item"
          >
            More...
          </NavLink>
        </li>
      </ul>
      <div className="logo">
        <Link to={'https://github.com/vahsimonian'} target="_blank">
          <img src={githubIcon} alt="Asean-school-logo" className="my-image" />
        </Link>
        <p className="vah-simonian">Vah Simonian</p>
      </div>
    </nav>
  );
};

export default StyledNavbar;
