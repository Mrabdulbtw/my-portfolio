import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProjectsItems({ name, img, id }) {


  const navigate = useNavigate()

  return (

    <div div className='projectItem'>
      <div className="imgae-holder">
        <img src={img} alt="" />
      </div>
      <h4>{name}</h4>
      <button className='view-button' onClick={() => {
        navigate('/projects/' + id)
      }}>view</button>
    </div >
  )
}
