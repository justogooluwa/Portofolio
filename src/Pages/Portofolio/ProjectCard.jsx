import React from 'react'
import "./ProjectCard.css"

const ProjectCard = ({ name, about, image}) => {
  return (
    <>
       <div className="project-card">
           <div className="projects-name">
                {name}
           </div>
           <div className="projects-about">
                 {about}
           </div>
           <div className="projects-img">
              <img src={image} alt="" />
           </div>
           </div>
    </>
  )
}

export default ProjectCard