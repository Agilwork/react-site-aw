import React, { Component } from 'react';

import Nav from '../../Nav'

class Header extends Component {
  render () {
    return (    
      <header id="header" class="page-equipe">
        <div class="container">
          <div class="row">
            <div class="col col-desktop-3 col-6">
              <a href="index.html">
                <img src="images/logo.png" alt="Logo da Chatschool" />
              </a>
            </div>
            <Nav />
          </div>
          <div class="row">
            <div class="col col-desktop-12 title">
              <h1>Alta produtividade em tempo real</h1>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header