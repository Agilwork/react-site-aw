import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import Customer from './Customer'

class HowItWork extends Component {
  render () {
    return (
      <section id="how-it-work" className="section section-center">
        <h2>Como funciona</h2>
        <h3 className="subtitle">
          Desenvolvemos soluções em software guiadas por nosso processo de desenvolvimento ágil                        
        </h3>

        <div className="container">
          <div className="row">
            <div className="col col-desktop-4">
              <div className="icon-container">
                <i className="material-icons">code</i>
              </div>
              <h3>IDEIAS</h3>
              <h3>Ajudamos você a enfrentar o desconhecido e avançar. 
                 Para que você possa experimentar e avançar rapidamente, 
                 usamos tecnologias e práticas que se adaptam à medida que evoluímos.</h3>              
              <p><Link to={"/contact"} className="btn">Saiba mais</Link></p>
            </div>
            <div className="col col-desktop-4">
              <div className="icon-container">
                <i className="material-icons">sync</i>
              </div>
              <h3>GESTÃO ÁGIL DE PROJETOS</h3>
              <h3>Desenvolvemos nossa metodologia de gestão visando o sucesso das entregas ao cliente. 
                Nossa metodologia é baseada nas melhores práticas e ferramantas de gestão ágil do mercado. Scrum, Kanban</h3>
              <p><Link to={"/contact"} className="btn">Saiba mais</Link></p>
            </div>
            <div className="col col-desktop-4">
              <div className="icon-container">
                <i className="material-icons">work</i>
              </div>
              <h3>AQUI ENTRAGAMOS</h3>
              <h3>
                Ajudamos nossos clientes a criar software com excelência e se manter à frente, ou até mesmo liderar mudanças em seus mercados.
                Entre em contato e faça um orçamento conosco.
              </h3>
              <p><Link to={"/contact"} className="btn">Saiba mais</Link></p>
            </div>
          </div>
        </div>    
      </section>
    )
  }
}

class Team extends Component {
  render () {
    return (
      <section id="team" class="section section-center">
        <h2>Nossa equipe</h2>
        <div class="container">
          <div class="row">
            <div class="col col-offset-desktop-1 col-desktop-10">
              <div class="img-box-round"><img src="images/team/team1.jpg" alt="" /></div>
              <p class="img-box-label">DIEGO HENRIQUE</p>
            </div>                  
          </div>
        </div>
      </section>
    )
  }
}

class Main extends Component {
  render () {
    return (
      <main>
        <HowItWork />
        <Customer />
        <Team />        
      </main>
    ) 
  }
}

export default Main