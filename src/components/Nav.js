import React, { Component } from 'react';

class Nav extends Component {
  render () {
    return (
      <div className="col col-desktop-9 col-6">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="quem-somos.html">Quem somos</a></li>
            <li><a href="clientes.html" className="active">Clientes</a></li>
            <li><a href="equipe.html">Equipe</a></li>
            <li><a href="contato.html">Contato</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav