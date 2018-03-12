import React, { Component } from 'react';

import Nav from '../../Nav'

class Header extends Component {
  render () {
    return (    
      <header id="header" class="page-equipe">
        <div class="container">
          <div class="row">           
            <Nav />
          </div>
          <div class="row">
            <div class="col col-desktop-12 title">
              <h1>PESSOAS APAIXONADAS COM O PROPÓSITO DE REVOLUCIONAR A CRIAÇÃO DE SOFTWARE</h1>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header