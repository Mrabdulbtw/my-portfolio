import React from 'react'
import '../style/projects.css'
import { projectsData } from '../projectsapi'
import ProjectsItems from './projectsItems'

export default function Projects() {
  return (
    <div className='projects-container' >
      <h2>my persnol projects</h2>
      <div className="projects-list">
        {
          projectsData.map((projectdata ,index) => {
            return <ProjectsItems  id={index} img={projectdata.projectImg} name={projectdata.projectName} />
          })
        }
      </div>
    </div>
  )                                           
}
