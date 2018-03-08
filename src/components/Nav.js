import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
  render () {
    return (
      <div className="col col-desktop-9 col-6">
        <nav>
          <ul>            
            <Link to={'/'}>Home</Link> 
            <Link to={'/how-it-work'}>Quem somos</Link> 
            <Link to={'/clients'}>Clientes</Link> 
            <Link to={'/time'}>Equipe</Link> 
            <Link to={'/contact'}>Contato</Link> 
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav
