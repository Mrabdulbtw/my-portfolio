import React from 'react';
import '../style/Experience.css'
import Exline from './Exline';
import { ExData } from './ExperienceData';



export default function Experience() {
  return (
    <div className='experience'>
      <div className="line">
        {
          ExData.map((data) => {
            return <Exline Education={data.Education} date={data.date} icon={data.icon} department={data.department} gpa={data.gpa} />
          })
        }
      </div>
    </div>
  )
}
