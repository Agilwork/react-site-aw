import React, { Component } from 'react';

import Nav from '../../Nav'

class Header extends Component {
  render () {
    return (
      <header id="header" className="page-clientes">
        <div className="container">
          <div className="row">            
            <Nav />
          </div>
          <div className="row">
            <div className="col col-desktop-12 title">
              <h1>ENTREGA CONTÍNUA É O NOSSO FOCO</h1>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header