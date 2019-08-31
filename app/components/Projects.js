import React from "react";
import Project from './Project-Item'
const projects = require('./projects.json')

class ProjectContainer extends React.Component {

    constructor(props){
        super(props)

        this.state = {

            CategoryFilter : ["FE", "BE", "FS"]
        }
    }

    toggleCategory = (cat) => {
        
        let { CategoryFilter } = this.state

        if(CategoryFilter.includes(cat)){ // delete from the filter

            let newCategoryFilter = [...CategoryFilter].filter( currentCat => currentCat !== cat)
            
            this.setState({

                CategoryFilter : newCategoryFilter
            })

        }
        else{ // add to the filter

            this.setState({
                CategoryFilter : [...CategoryFilter, cat]
            })
        }
    }

    render(){

        window.scrollTo(0, 0);

        const {CategoryFilter} = this.state

        const selected = {"opacity": ".9", "backgroundColor": "rgba(255,255,255,.1)"}

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


                    </div>
                    
                    { projects.filter(thisProject => {
                           
                            for (let cat of thisProject.cat){
                               
                                if(CategoryFilter.includes(cat)){
                               
                                    return true
                                }
                            }

                            return false
                        })
                        .map( (thisProject, i) => {
                          
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