import React, { Component } from 'react';

class Main extends Component {
  render () {
    return (
      <main>
        <section className="section" id="intro">
          <div className="container">
            <div className="row">
              <div id="img-box" className="col col-desktop-4 col-6">
                <img src="images/quem-somos/quem-somos_01.jpg" alt="" />
              </div>
              <div className="col col-desktop-8">
                <h2>Quem somos</h2>
                <p>Nós somos uma empresa de soluções em tecnologia da informação. 
                  Fornecemos soluções em sistemas, fábrica de software, consultoria em gestão de projetos. 
                  Estamos sempre em constante evolução, nos reinventando a cada dia, a cada ciclo de avaliação. 
                  Trabalhamos com espírito de STARTUP, valorizando agilidade, inovação e empreendedorismo.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-center" id="valores">
          <div className="container">
            <div className="row">
              <div className="col col-desktop-4">
                <img src="images/quem-somos/quem-somos_02.jpg" alt="" />
                <h2>Missão</h2>
                <p>Nossa missão é melhorar a humanidade através do software e ajudar a gerar a criação de um ecossistema 
                   socialmente responsável e economicamente justo.</p>
              </div>
              <div className="col col-desktop-4">
                <img src="images/quem-somos/quem-somos_03.jpg" alt="" />
                <h2>Visão</h2>
                <p>Sermos percebidos como essenciais por nossos clientes ao impulsionar seus negócios, 
                   fornecendo soluções fantásticas em tecnologia da informação.</p>
              </div>
              <div className="col col-desktop-4">
                <img src="images/quem-somos/quem-somos_04.jpg" alt="" />
                <h2>Valores</h2>
                <p>Sustentabilidade, Inovação, Confiança, Valorização de Pessoas e Relações Duradouras.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default Main