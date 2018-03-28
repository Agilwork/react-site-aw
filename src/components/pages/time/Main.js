import React, { Component } from 'react';

class Main extends Component {
  render () {
    return (
      <main>
        <section id="team" className="section section-center">
          <div className="container">
            <h2>Nossa equipe</h2>            
            <div className="container">
              <div className="row">
                <div className="team-member col-2 col col-offset-desktop-1 col-desktop-10">
                  <div className="img-box-round"><img src="images/team/team1.jpg" alt="" /></div>
                  <p className="img-box-label">DIEGO HENRIQUE</p>
                  <div className="description">
                    <h4>DIEGO HENRIQUE</h4>
                    <p>
                      Possui graduação em Análise e Desenvolvimento de Sistemas  pela FTEC e especialização em Sistemas de Informação com Métodos Ágeis
                      pela UNIRITTER/RS. Trabalha com PHP/MySQL desde 2009, com Linux desde 2007. 
                      Grande fã de programação, do bom e velho Rock n’ Roll e Heavy Metal, 
                      suas influências envolvem Uncle bob, Martin Fowler, Kent Beck, Linus Torvalds, Steve Jobs e Lemmy Kilmister.
                    </p>

                    <div className="social">
                      <a href="https://github.com/DieguinhoHR"><img src="images/social-github.png" alt="" /></a>&nbsp;
                      <a href="https://www.facebook.com/diegohminotauro"><img src="images/social-facebook.png" alt="" /></a>&nbsp;
                      <a href="https://www.linkedin.com/in/diegorodriguesdesenvolvimento"><img src="images/social-linkedin.png" alt="" /></a>                      
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </section>
      </main>
    )
  }
}

export default Main