import React from "react";
import Media from 'react-media'
import Project from './Project'

const projects = require('./projects.json')

const ProjectLanding = () => {

    window.scrollTo(0, 0);

    return (

        <div className="projects-container">
                <div className="project-nav">

                </div>
                <span id="title-text"> Projects </span>
                
                { projects.map(thisProject => <Project key={thisProject.id} project={thisProject}/> 
                        
                ) }
                
        </div>
        
    )
}

export default ProjectLanding