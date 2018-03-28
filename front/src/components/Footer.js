import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render () {
    return (
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col col-offset-desktop-1 col-desktop-3">
              <p>Entre em contato: (47)991790789</p>
              <p>
                Somos uma empresa de software e uma comunidade de pessoas apaixonadas, 
                movidas por inúmeras causas. Pensamos de maneira disruptiva para entregar tecnologia que resolve os maiores desafios de nossos clientes.
              </p>
            </div>
            <div className="col col-offset-desktop-1 col-desktop-2 col-2">
              <h3>Menu</h3>
              <nav>
                <ul>
                  <li><Link to={'/'}>Home</Link></li> 
                  <li><Link to={'/how-it-work'}>Quem somos</Link></li>  
                  <li><Link to={'/clients'}>Clientes</Link></li>  
                  <li><Link to={'/time'}>Equipe</Link></li>  
                  <li><Link to={'/contact'}>Contato</Link></li>  
                </ul>
              </nav>
            </div>
            <div className="col col-desktop-3 social col-4">
              <a href="https://github.com/Agilwork"><img src="images/footer/social-github.png" alt="" /></a>
              <a href=""><img src="images/footer/social-facebook.png" alt="" /></a>
              <a href=""><img src="images/footer/social-linkedin.png" alt="" /></a>
            </div>
          </div>
        </div>

        <div id="copyright">
          &copy; Agiworks - {this.getCurrentYear()} - Todos os direitos reservados
        </div>
      </footer>    
    )
  }

  getCurrentYear () {    
    return new Date().getFullYear()
  }
}

export default Footer
