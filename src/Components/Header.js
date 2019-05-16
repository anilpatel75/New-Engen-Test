import React, { Component } from 'react'
import '../styles/header.css';
import { Link } from 'react-router-dom';
import logo from '../design/CartIcon.svg'
import brandLogo from '../design/NewEngen-Logo.svg'

export class Header extends Component {
  render() {
    return (
      <div className="main_header">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">
                <img src={brandLogo} />
              </Link>
            </div>
            <div >
              <Link to="/cart">
                <img src={logo} />
                <span className="main_Cart">{this.props.colorCount}</span>
              </Link>
            </div>
          </div>
        </nav>

      </div>
    )
  }
}

export default Header
