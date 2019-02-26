import React from 'react'
import Introduction from '../components/Introduction/Introduction'
import ProjectsContainer from '../components/ProjectsContainer/ProjectsContainer'
import Footer from '../components/Footer/Footer'

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Introduction />
        <ProjectsContainer />
        <Footer />
      </div>
    );
  }
}

export default Home