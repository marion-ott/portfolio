import React from 'react'
import Button from '../Button/Button'
import data from '../../data.json'
import css from './introduction.scss'
import Header from '../Header/Header'
//import TweenLite from "gsap/TweenLite"

class Introduction extends React.Component {
  constructor(props) {
    super(props)
    this.email = "marion_ott@me.com"
  }
  render() {
    const content = data.introduction

    return (
      <div className={css.component}>
        <Header />
        <div className="introduction">
          <div className="titleContainer">
            <h1 dangerouslySetInnerHTML={{__html: content.title}}></h1>
          </div>
          <div className="textContainer">
            <p className="text" dangerouslySetInnerHTML={{__html: content.text}}></p>
            <Button href={`mailto:${this.email}`} text="Let's talk now"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
