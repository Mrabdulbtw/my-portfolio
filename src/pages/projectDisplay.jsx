import React from 'react'
import { projectsData } from '../projectsapi'
import { useParams } from 'react-router-dom'

export default function ProjectDisplay() {

    const { id } = useParams()
    const projects = projectsData[id]

    return (
        <div >
            {projects.projectName}
        </div>
    )
}
