import React, { Component } from 'react';

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Loading from './components/support/Loading';

class App extends Component {
  render() {
    return (
      <div>             
        <Header title="SEMPRE CRIANDO, SEMPRE ENTREGANDO." 
                subtitle="Grandes ideias, ganhando vida rapidamente por meio da tecnologia. Em semanas, não em anos." />             
        <Main/>
        <Footer />
      </div>
    )
  }
}

export default App;
