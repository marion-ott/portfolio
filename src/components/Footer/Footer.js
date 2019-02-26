import React from 'react'
import './footer.scss'

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.email = "marion_ott@me.com"
    }
    render() {
        return(
            <footer className="footer">
                <div className="footer__divider"></div>
                <div className="footer__container">
                    <div className="footer__leftSection">
                        {/* <h3>Convinced?<br></br>Then get in touch! ✌️</h3> */}
                        <h3>Get in touch! ✌️</h3>
                        <a href={`mailto:${this.email}`}>Say hello</a>
                    </div>
                    <div className="footer__rightSection">
                        <p>External links</p>
                        <div className="socialItems">
                            <a href="https://github.com/marion-ott" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://www.linkedin.com/in/marionott/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer