import React, { Component } from 'react';

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
            <div class="col col-desktop-9 col-6">
              <nav>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="quem-somos.html">Quem somos</a></li>
                  <li><a href="clientes.html">Clientes</a></li>
                  <li><a href="equipe.html" class="active">Equipe</a></li>
                  <li><a href="contato.html">Contato</a></li>
                </ul>
              </nav>
            </div>
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