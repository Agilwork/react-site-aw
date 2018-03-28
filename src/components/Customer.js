import React, { Component } from 'react';

class Customer extends Component {
  render () {
    return(
      <section id="customers" class="section section-center">
        <h2>NOSSOS CLIENTES PENSAM GRANDE</h2>
        <h3 class="subtitle">
          Acreditamos que a colaboração com o cliente é mais importante que a negociação de contratos.
        </h3>

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
        </div>
      </section>
    )
  }
}

export default Customer