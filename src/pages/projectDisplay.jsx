import React from 'react'
import { projectsData } from '../projectsapi'
import { Link, useParams } from 'react-router-dom'

export default function ProjectDisplay() {

    const { id } = useParams()
    const projects = projectsData[id]

    return (
        <div className='project-display-container' >
            <div className="view-project-name">
                <h3>{projects.projectName}</h3>
            </div>
            <div className="view-project">
                <div className="image-holder">
                    <img src={projects.projectImg} alt="" />
                </div>
            </div>

            <div className="view-descripition">
                <div className="des-name">
                    <b> name : </b>{projects.projectName}
                </div>
                <div className="view-descripition-details">
                    <b>descripition : </b>{projects.projectsdescription}
                </div>
                <div className="view-link">
                    <b>  Link : </b> <Link to={projects.projectLink}>https://mrabdulbtw.github.io/cart/</Link>
                </div>
            </div>

        </div>
    )
}
