import React from 'react';
import { Link } from 'react-router-dom'

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
          <Link className="nav-btn" to="/">
              ABOUT
          </Link>
          <Link className="nav-btn" to="/tech">
              TECHNOLOGIES 
          </Link>
          <Link className="nav-btn" to="projects">
              PROJECTS
          </Link>
      </div>

      <div className="icons">

        <a href="https://github.com/iamjoncannon" target="_blank" style={{order: "5"}}><i id="logo" className="fab fa-github fa-5x nav-link-right nav-desktop" /></a>
        <a href="https://www.linkedin.com/in/iamjoncannon/" target="_blank" style={{order: "6"}}><i id="logo" className="fab fa-linkedin fa-5x nav-link-right nav-desktop" /> </a>
        <a href="https://globally.ltd/4" target="_blank" style={{order: "7"}}><img src="https://jayceecodesphotos.s3.amazonaws.com/globallyLTD.jpg" className="fab nav-link-right nav-desktop nav-icon-globally"/></a>
      </div>
    
    </div>
  );
};