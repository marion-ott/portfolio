import React from 'react'
import data from '../../data.json'
import ProjectItem from './ProjectItem/ProjectItem'
import css from './projectsContainer.scss'

class ProjectsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.generateProjects = this.generateProjects.bind(this)
        this.projects = []
    }

    generateProjects = (item, i) => {
        let isReverse = i % 2 === 0

        switch(isReverse) {            
            case (true):
                return <ProjectItem direction="row" refs={el => this.projects.push(el)} details={item} key={i} index={i} />
            case (false):
                return <ProjectItem direction="reverse" refs={el => this.projects.push(el)} details={item} key={i} index={i} />
            default:
                return false
                
        }
    }

    render() {
        const projects = data.projects
        
        return(
            <div className={css.component}>
                { projects.map((item, i) => this.generateProjects(item, i)) }
            </div>
        )
    }
}

export default ProjectsContainer