import React, { Component } from 'react';

import Nav from '../../Nav'

class Header extends Component {
  render () {
    return (
      <header id="header" className="page-quem-somos">
        <div className="container">
          <div className="row">
            <div className="col col-desktop-3 col-6">
              <a href="index.html">
                <img src="images/logo.png" alt="Logo da Chatschool" />
              </a>
            </div>
            <Nav />
          </div>
          <div className="row">
            <div className="col col-desktop-12 title">
              <h1>Alta produtividade em tempo realtime</h1>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header