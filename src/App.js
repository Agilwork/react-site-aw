import React, { Component } from 'react';

import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <header id="header" className="page-home">
        <div className="container">
          <div className="row">
            <div className="col col-desktop-3 col-6">
              <a href="index.html">
                <img src="images/logo.png" alt="Logo da Chatschool" />
              </a>
            </div>
            <div className="col col-desktop-9 col-6">
              <nav>
                <ul>
                  <li><a href="/" className="active">Home</a></li>
                  <li><a href="quem-somos.html">Quem somos</a></li>
                  <li><a href="clientes.html">Clientes</a></li>
                  <li><a href="equipe.html">Equipe</a></li>
                  <li><a href="contato.html">Contato</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col col-desktop-12 title">
              <h1>Alta produtividade em tempo real</h1>
              <a href="produto.html" className="btn">Começar agora</a>
            </div>
          </div>
        </div>
      </header>  

      
    );
  }
}

export default App;
