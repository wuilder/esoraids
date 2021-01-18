import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from './images/logo.png'

export default class Nav extends Component {
  render() {
    const logostyle = {
      width: "auto",
      height: "50px",
    }
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="nav-item navbar-brand" to="/"><img src={Logo} style={logostyle} alt="TC" /></Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <Link className="nav-item nav-link font-weight-bold text-white" to="/probando">Raids</Link>
              <Link className="nav-item nav-link font-weight-bold text-white">Tank</Link>
              <Link className="nav-item nav-link font-weight-bold text-white">Healer</Link>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}
