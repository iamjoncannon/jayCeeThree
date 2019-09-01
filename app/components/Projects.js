import React from "react";
import Project from './Project-Item'
let Projects = require('./projects.json')

class ProjectContainer extends React.PureComponent {

    constructor(props){
        super(props)

        this.state = {

            CategoryFilter : ["FE", "BE", "FS"],
            selectedProject : null
        }
    }

    toggleCategory = (cat) => {
        
        let { CategoryFilter } = this.state

        if(CategoryFilter.includes(cat)){ // delete from the filter

            let newCategoryFilter = [...CategoryFilter].filter( currentCat => currentCat !== cat)
            
            this.setState({
                selectedProject : null,
                CategoryFilter : newCategoryFilter
            })

        }
        else{ // add to the filter

            this.setState({
                selectedProject : null,
                CategoryFilter : [...CategoryFilter, cat]
            })
        }
    }

    handleProjectSelect = (project) => {

        if(this.state.selectedProject === project){

            this.setState({
                selectedProject: null
            })

        }
        else {

            this.setState({
                selectedProject : project
            })
        }
    }

    render(){

        window.scrollTo(0, 0);

        const {CategoryFilter, selectedProject } = this.state

        const selected = {"opacity": ".9", "backgroundColor": "rgba(255,255,255,.1)"}

        let projects = Projects.filter(thisProject => {

            if(selectedProject){

                return thisProject.id === selectedProject
            }
                           
            for (let cat of thisProject.cat){
               
                if(CategoryFilter.includes(cat)){
               
                    return true
                }
            }

            return false
        })

        return (

            <div className="projects-container">

                    <div className="project-nav">

                        <span className="title-text"> Projects </span>
                        <div className="cats">

                            <span className="caps-text" 
                                  onClick={()=>this.toggleCategory("FS")}
                                  style={CategoryFilter.includes("FS") ? selected : {}}
                            >
                                full-stack
                            </span>

                            <span className="caps-text" 
                                  onClick={()=>this.toggleCategory("FE")}
                                  style={CategoryFilter.includes("FE") ? selected : {}}                            
                            >
                                front-end
                            </span>
                            
                            <span className="caps-text" 
                                  onClick={()=>this.toggleCategory("BE")}
                                  style={CategoryFilter.includes("BE") ? selected : {}}                                                        
                            >
                                back-end
                            </span>
                        </div>

                        { window.outerWidth > 600 && 
                            <div className="project-selector">

                            {projects.map( (project, i) =>{
                                
                                return(
                                    <span key={i} onClick={()=>this.handleProjectSelect(project.id)}>
                                        
                                        {selectedProject ? "All Projects" : project.id}
                                        
                                    </span>
                                )
                            })}
                            
                            </div>
                        }

                    </div>
                    
                    { projects.map( (thisProject, i) => {
                          
                            return(
                                <Project key={i} id={i} name={thisProject.id} project={thisProject}/> 
                            )
                        }
                    ) }  
            </div>
        )
    }
}

export default ProjectContainer