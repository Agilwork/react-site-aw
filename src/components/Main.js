import React, { Component } from 'react';

class Main extends Component {
  render () {
    return (
      <main>
        <section id="how-it-work" className="section section-center">
          <h2>Como funciona</h2>
          <p className="subtitle">Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet</p>
    
          <div className="container">
            <div className="row">
              <div className="col col-desktop-4">
                <div className="icon-container">
                  <i className="material-icons">schedule</i>
                </div>
                <h3>Chat em tempo real</h3>
                <p>Aenean sollicitudin, lorem quis bibendum. Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,</p>
                <p><a href="" className="btn">Saiba mais</a></p>
              </div>
              <div className="col col-desktop-4">
                <div className="icon-container">
                  <i className="material-icons">work</i>
                </div>
                <h3>Grupo de trabalho</h3>
                <p>Aenean sollicitudin, lorem quis bibendum. Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,</p>
                <p><a href="" className="btn">Saiba mais</a></p>
              </div>
              <div className="col col-desktop-4">
                <div className="icon-container">
                  <i className="material-icons">https</i>
                </div>
                <h3>Segurança</h3>
                <p>Aenean sollicitudin, lorem quis bibendum. Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,</p>
                <p><a href="" className="btn">Saiba mais</a></p>
              </div>
            </div>
          </div>    
        </section>

        <section id="customers" class="section section-center">
          <h2>Nossos clientes</h2>
          <p class="subtitle">Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet</p>
    
          <div class="container">
            <div class="row">
              <div class="col col-desktop-3"><img src="images/clientes/icon1.png" alt="" /></div>
              <div class="col col-desktop-3"><img src="images/clientes/icon2.png" alt="" /></div>
              <div class="col col-desktop-3"><img src="images/clientes/icon3.png" alt="" /></div>
              <div class="col col-desktop-3"><img src="images/clientes/icon4.png" alt=""/></div>
            </div>
    
            <div class="row">
              <div class="col col-desktop-3"><img src="images/clientes/icon5.png" alt="" /></div>
              <div class="col col-desktop-3"><img src="images/clientes/icon6.png" alt="" /></div>
              <div class="col col-desktop-3"><img src="images/clientes/icon7.png" alt="" /></div>
              <div class="col col-desktop-3"><img src="images/clientes/icon8.png" alt="" /></div>
            </div>
            <div class="row">
              <div class="col col-desktop-12">
                <a href="" class="btn">Todos os clientes <i class="material-icons">arrow_forward</i></a>
              </div>
            </div>
          </div>
        </section>

        <section id="team" class="section section-center">
          <h2>Nossa equipe</h2>
          <p class="subtitle">Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet</p>
          <div class="container">
            <div class="row">
              <div class="col col-offset-desktop-1 col-desktop-2">
                <div class="img-box-round"><img src="images/team/team1.jpg" alt="" /></div>
                <p class="img-box-label">Lorem Ipsum</p>
              </div>
              <div class="col col-desktop-2">
                <div class="img-box-round"><img src="images/team/team2.jpg" alt="" /></div>
                <p class="img-box-label">Lorem Ipsum</p>
              </div>
              <div class="col col-desktop-2">
                <div class="img-box-round"><img src="images/team/team3.jpg" alt="" /></div>
                <p class="img-box-label">Lorem Ipsum</p>
              </div>
              <div class="col col-desktop-2">
                <div class="img-box-round"><img src="images/team/team4.jpg" alt="" /></div>
                <p class="img-box-label">Lorem Ipsum</p>
              </div>
              <div class="col col-desktop-2">
                <div class="img-box-round"><img src="images/team/team5.jpg" alt="" /></div>
                <p class="img-box-label">Lorem Ipsum</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    ) 
  }
}

export default Main