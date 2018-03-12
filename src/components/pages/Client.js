import React, { Component } from 'react';

import Header from '../pages/clients/Header'
import Main from '../pages/clients/Main'
import Footer from '../Footer'

class Client extends Component {
  render () {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default Client
