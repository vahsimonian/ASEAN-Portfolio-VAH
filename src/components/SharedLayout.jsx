import React from 'react';
import StyledNavbar from './StyledNavbar';
import { Outlet } from 'react-router-dom';
import '../App.css';

const SharedLayout = () => {
  return (
    <div className="layout">
      <div className="styled-navbar">
        <StyledNavbar />
      </div>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;
