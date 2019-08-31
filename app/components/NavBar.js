import React from 'react';

export default function NavBar (props){

  return (
    <div className="header">

      <div className="logo">
          <div>

          <span className="main">
            JONCANNON
          </span>
          </div>
          <div>

          <span className="sub">
            dot codes
          </span>
          </div>
      </div>

      <div className="main-nav">
          <span className="nav-btn">
              ABOUT
          </span>
          <span className="nav-btn">
              TECHNOLOGIES 
          </span>
          <span className="nav-btn">
              PROJECTS
          </span>
      </div>

    </div>
  );
};