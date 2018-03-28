import React, { Component } from 'react';

import Nav from '../../Nav'

class Header extends Component {
  render () {
    return (
      <header id="header" className="page-quem-somos">
        <div className="container">
          <div className="row">           
            <Nav />
          </div>
          <div className="row">
            <div className="col col-desktop-12 title">
              <h1>SOMOS A AGILWORKS</h1>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header