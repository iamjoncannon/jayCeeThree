import React from 'react';

export default function AboutMe (props){

  return (

    <div className="about-me">
      <div className="title-text">
        <span>About Me</span>
      </div>
      
      <div>

      <img src="https://jayceecodesphotos.s3.amazonaws.com/me.jpg" />
      
      <span className="copy-text">

        <p>Jonathan Cannon is a software engineer living and working in Brooklyn, NY. He holds a Bachelor's Degree in Political Science from the University of Chicago.</p>

        <p>He has previously spoken at the React NYC meetup on the Redux-Genie npm package, and in the summer of 2019 worked as a Developer Intern at Critical Mass, a global digital agency.</p>

        <p>In his free time, he makes tunes, and nerds out with React, Python, Golang, and other software.</p>
      </span>
      </div>
   
    </div>
  );
};