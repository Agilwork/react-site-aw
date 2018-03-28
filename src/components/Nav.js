import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
  render () {
    return (
      <div>
        <div className="col col-desktop-3 col-6">          
          <Link to={'/'}>
          </Link>
        </div>
        
        <div className="col col-desktop-9 col-6">
          <nav>
            <ul>            
              <Link to={'/'}>Home</Link> 
              <Link to={'/how-it-work'}>Sobre nós</Link> 
              <Link to={'/clients'}>Clientes</Link> 
              <Link to={'/time'}>Equipe</Link> 
              <Link to={'/contact'}>Contato</Link> 
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Nav
