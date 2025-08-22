import React from 'react'
import ProjectCard from './ProjectCard'
import ipokia from "../../assets/ipokia.png"
import restcountry from "../../assets/restcountry.png"

const Project = () => {
  return (
    <>
    <div className="project-container">
        <div className="project-header">Projects</div>
        <div className="projects">
     <ProjectCard 
     name='Ipokia'
     about='Ipokia Local Government is a digital portal designed to simplify the Ipokia LGA Certificate of Origin process ,
      enabling indigenes to apply online, upload documents, capture images,
      make secure payments, and access their printable certificate, all in a fast, transparent, and paperless way.'
      image={ipokia}
      />

      <ProjectCard 
      name="Rest Country API"
      about="Rest-Countries-Api is a ReactJS-based web application that allows users to search for and filter country information using the REST Countries API.
       The application provides detailed data about countries, including their names, flags, populations, regions, and capitals."
       image={restcountry}/>

       <ProjectCard 
      name="Rest Country API"
      about="Rest-Countries-Api is a ReactJS-based web application that allows users to search for and filter country information using the REST Countries API.
       The application provides detailed data about countries, including their names, flags, populations, regions, and capitals."
       image={restcountry}/>

        <ProjectCard 
     name='Ipokia'
     about='Ipokia Local Government is a digital portal designed to simplify the Ipokia LGA Certificate of Origin process ,
      enabling indigenes to apply online, upload documents, capture images,
      make secure payments, and instantly access their printable certificate, all in a fast, transparent, and paperless way.'
      image={ipokia}
      />
       </div>
       </div>
    </>
  )
}

export default Project