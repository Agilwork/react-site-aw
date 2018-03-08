import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col col-offset-desktop-1 col-desktop-3">
              <p><a href=""><img src="images/logo.png" alt="Logo da Chatschool" /></a></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla mollis erat, vitae pulvinar nisi laoreet eget. Curabitur at arcu mi. Cras vitae pharetra mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed id felis leo. Maecenas est est, vulputate at congue non, pulvinar eu arcu.</p>
            </div>
            <div className="col col-offset-desktop-1 col-desktop-2 col-2">
              <h3>Menu</h3>
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
            <div className="col col-desktop-3 social col-4">
              <a href=""><img src="images/social-facebook.png" alt="" /></a>
              <a href=""><img src="images/social-twitter.png" alt="" /></a>
              <a href=""><img src="images/social-youtube.png" alt="" /></a>
            </div>
          </div>
        </div>

        <div id="copyright">
          &copy; Agiwork - 2018 - Todos os direitos reservados
        </div>
      </footer>    
    )
  }
}

export default Footer
