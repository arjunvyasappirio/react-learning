/**
 * Created by Arjun Vyas on 9/5/2017.
 */
import React, { Component } from 'react';
import  NavBarForm from './navBarForm';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    const { pageTitle, showForm } =  this.props;
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">{pageTitle}</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <NavLink to="/" activeClassName="active">Home</NavLink>
              </li>
            <li>
              <NavLink to="/about" activeClassName="active">About</NavLink>
              </li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div id="navbar" className="navbar-collapse collapse">
            {showForm == true && <NavBarForm/>}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
