import React, { Component } from 'react';

import Header from '../pages/time/Header'
import Main from '../pages/time/Main'
import Footer from '../Footer'

class Client extends Component {
  render () {
    return (
      <div>
        <Header title="Alta produtividade em tempo real" />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default Client
