import React from "react";
import OtherField from './Other_Fields'

class Project extends React.Component {

    constructor(props){
        super(props)

        this.state= {
            open: this.props.id === 0
        }
    }

    handleOpen = () => {
        this.setState({open: !this.state.open})

        this.props.id > 5 && window.scrollTo(0,document.body.scrollHeight)
    }

    render(){

        const { project, name } = this.props

        const selected = {"opacity": ".5"}

        return (

            <div className={"project-each"}>

                    <span className={"title-text"} 
                          onClick={this.handleOpen}
                          style={this.state.open ? selected : {} }
                    >
                          {name}
                    </span>

                    { this.state.open &&

                    <div className="bottom">
                        
                        { project.back_img && <img src={project.back_img} /> }

                        <span className={"desc-text"}>{project.desc}</span>
        
                        <span className={"desc-text"}><b>Technologies:</b> {project.Technologies}</span>
                    
                        <div className={"desc-text"}>
        
                            <span>Codebase:</span>
        
                            <a href={project.GH_url} target="_blank"><i className="fab fa-github fa-2x project-GH" /></a>
                        </div>
        
                        { project.other_fields.length > 0 ? project.other_fields.map( thisOtherField => <OtherField field={thisOtherField} />) : ""}
                    </div>
                    }
            </div>
        )
    }
}

export default Project
