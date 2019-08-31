import React from 'react';
const technologies = require('./tech.json')
import TechItem from "./TechItem"

export default function Tech (props){
  
  window.scrollTo(0, 0);

  return (

    <div className="tech">

      <span className="title-text">Technologies</span>
      
      <span className="desc-text">Technologies used in previous projects</span>
      
      <span className="section-text">Strong</span>
      <span className="desc-text">
        Used in multiple previous projects- very familiar and capable 
      </span>
      <div className="tech-list">

                    { technologies.strong.map(thisTech => <TechItem key={thisTech.id} thisTech={thisTech}/> 
                            
                    ) }  
      </div>

      <span className="section-text">Experience</span>
      <span className="desc-text">
      Used in previous projects- some familiarity and experience  
      </span>
      <div className="tech-list">

                    { technologies.experience.map(thisTech => <TechItem key={thisTech.id} thisTech={thisTech}/> 
                            
                    ) }  
      </div>
   
    </div>
  );
};