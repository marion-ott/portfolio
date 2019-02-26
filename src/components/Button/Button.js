import React from 'react'
import { Link } from 'react-router-dom'
import css from './button.scss'
//import ReactDOM from 'react-dom'
//import TweenLite from "gsap/TweenLite"

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.hoverArrow = this.hoverArrow.bind(this)
    }

    hoverArrow = (e) => {
        //const arrow = ReactDOM.findDOMNode(this).querySelector('.arrow')
        //TweenLite.to(arrow, 0.3, {opacity: 0})
    }

    render() {
        return(
            <div className={css.component}>
                <a 
                    href={this.props.href} 
                    className="buttonLink"
                    onMouseEnter={this.hoverArrow}
                    onMouseLeave={this.hoverArrow}
                >
                    {this.props.text}
                    {/* <span className="arrow">→</span> */}
                </a>
            </div>
        )
    }
}

export default Button