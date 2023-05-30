import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProjectsItems({ name, img, id }) {


  const navigate = useNavigate()

  return (

    <div div className='projectItem' onClick={() => {
      navigate('/projects/' + id)
    }}>
      <img src={img} alt="" />
      <h4>{name}</h4>
    </div >
  )
}
