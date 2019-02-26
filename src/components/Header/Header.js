import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.email = "marion_ott@me.com"
  }
  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <a className="header__logoItem" to="/">ṀỌ</a>
        </div>
        <nav className="header__navigation">
          <ul>
            <li className="header__navigationItem">
              <a href={`mailto:${this.email}`} className="header__navigationItemLink">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header
