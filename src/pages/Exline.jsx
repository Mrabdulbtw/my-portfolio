import React from 'react'


export default function Exline({ Education, icon, date, department, gpa }) {
    return (
        <div className="element">
            <div className="experience-content">
                <div className="e-box">
                    <p> {Education}</p>
                    <b>{department}</b>
                    <p> <b>GPA : </b> {gpa} </p>
                </div>
            </div>
            <span className='-icon'>{icon}</span>
            <div className="date">
                {date}
            </div>
        </div>
    )
}
