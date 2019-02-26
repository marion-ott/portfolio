import React from 'react'
import css from './projectItem.scss'

const ProjectItem = (props) => (
    <div className={`${css.component} ${props.direction}`}>
        <div className="textContainer">
            <p className="id">{`0${props.index + 1}`}</p>
            <p className="name">{props.details.title}</p>
            <p className="role">{props.details.role}</p>
            <p className="desc" dangerouslySetInnerHTML={{__html: props.details.desc}}></p>
            <div className="skills">
                { props.details.skills.map((skill, key) => <div key={key} className="skill"><p>{skill}</p></div>) }
            </div>
        </div>
        <div className="imgContainer">
            <a href={props.details.url} target="_blank" rel="noopener noreferrer">{props.details.title}</a>
            <img src={process.env.PUBLIC_URL + props.details.img} alt={`Preview of the project ${props.details.title}`}/>
        </div>
    </div>
)

export default ProjectItem