import React, { Component } from 'react';

import Nav from '../../Nav'

class Header extends Component {
  render () {
    return (
      <header id="header" className="page-contato">
        <div className="container">
          <div className="row">           
            <Nav />
          </div>
          <div className="row">
            <div className="col col-desktop-12 title">
              <h1>ENTRE EM CONTATO CONOSOCO</h1>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header