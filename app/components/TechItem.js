import React from "react";

const Tech = (props) => {

    const {thisTech} = props

    let imageURL 

    if(!thisTech.img_url.startsWith("http")){

        imageURL = "https://jayceecodesphotos.s3.amazonaws.com/" + thisTech.img_url
    }
    else{
        
        imageURL = thisTech.img_url
    }

    return (

        <div className={"tech-list-item"}>
              
            <img src={imageURL}  />
            <span>{props.thisTech.name}</span>
        </div>
    )
}

export default Tech
