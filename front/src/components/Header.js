import React, { Component } from 'react'

import Nav from './Nav'
import {Link} from 'react-router-dom';

class Header extends Component {
  constructor (title, subtitle) {
    super()
  }

  render() {
    return (
      <header id="header" className="page-home">
        <div className="container">
          <div className="row">           
            <Nav />
          </div>
          <div className="row">
            <div className="col col-desktop-12 title">
              <h1>{ this.props.title }</h1>
              <h3>{ this.props.subtitle }</h3>
              <Link to={"/contact"} className="btn">ENTRE EM CONTATO</Link>
            </div>
          </div>          
        </div>
      </header> 
    );
  }
}

export default Header
