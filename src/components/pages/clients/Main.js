import React, { Component } from 'react';

class Main extends Component {
  render () {
    return (
      <main>
        <section id="customers" className="section section-center">
          <h2>Nossos clientes</h2>
          <p className="subtitle">Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet</p>
      
          <div className="container">
            <div className="row">
              <div className="col col-desktop-3 col-3"><img src="images/clientes/icon1.png" alt="" /></div>
              <div className="col col-desktop-3 col-3"><img src="images/clientes/icon2.png" alt="" /></div>
              <div className="col col-desktop-3 col-3"><img src="images/clientes/icon3.png" alt="" /></div>
              <div className="col col-desktop-3 col-3"><img src="images/clientes/icon4.png" alt="" /></div>
            </div>          

            <div className="row">
              <div className="col col-desktop-3 col-3"><img src="images/clientes/icon1.png" alt="" /></div>
              <div className="col col-desktop-3 col-3"><img src="images/clientes/icon2.png" alt="" /></div>
              <div className="col col-desktop-3 col-3"><img src="images/clientes/icon3.png" alt="" /></div>
              <div className="col col-desktop-3 col-3"><img src="images/clientes/icon4.png" alt="" /></div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default Main