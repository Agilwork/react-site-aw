import React, { Component } from 'react';

class Main extends Component {
  constructor () {
    super()
    this.state = {message: ''}
  }

  render () {
    return (
      <main className="main-contact">
        <section className="section section-center">
          <h2>Contato</h2>
          <span>{ this.state.message}</span>
          <div className="container">
            <form onSubmit={ this.save.bind(this) } className="row">
              <div className="col col-desktop-6 col-6">
                <div className="input-control">
                  <input id="nome" name="nome" type="text" required placeholder="Nome..." 
                         ref={ input => this.name = input } />
                  <label for="nome">Nome*</label>
                </div>
                <div className="input-control">
                  <input id="email" name="email" type="email" required placeholder="Email..." 
                         ref={ input => this.email = input }/>
                  <label for="email">Email*</label>
                </div>
                <div className="input-control">
                  <input id="telefone" name="telefone" type="number" placeholder="Telefone..." 
                         ref={ input => this.telephone = input} />
                  <label for="telefone">Telefone</label>
                </div>
              </div>
              
              <div className="col col-desktop-6 col-6">
                <div className="input-control">
                  <textarea id="mensagem" name="mensagem" id="" cols="30" rows="10" placeholder="Mensagem..."
                        ref={ input => this.message = input }></textarea>
                  <label for="mensagem">Mensagem</label>
                </div>
              </div>

              <div className="col col-desktop-12 col-6">
                <input type="submit" value="Enviar" className="btn orange" />
              </div>

            </form>
          </div>
        </section>
      </main>
    )
  }

  save (event) {
    event.preventDefault()

    const request = {
      method: 'POST',
      body: JSON.stringify({
        name: this.name.value,
        email: this.email.value,
        telephone: this.telephone.value,
        message: this.message.value
      }),
      headers: new Headers({
        'Content-type': 'application/json'
      })
    }

    fetch("https://script.google.com/macros/s/AKfycbzwr5wrIL9yQUw3Lh83wjqIw05peunLi-iUHiNVMgQ9WgXbj3AM/exec", request)
      .then(response => {
        if (response.ok) {
          return response.text()
        } else {
          this.setState({ message: "Não foi possivel salvar os dados"})
        }
      })
      .then(token => {
        console.log(token)
      })
  }
}

export default Main