import React, { Component } from 'react';

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {
  render() {
    return (
      <div>        
        <Header title="SEMPRE CRIANDO, SEMPRE ENTREGANDO." 
                subtitle="Grandes ideias, ganhando vida rapidamente por meio da tecnologia. Em semanas, não em anos." />             

        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
        </ReactCSSTransitionGroup>                
        <Main/>
        <Footer />
      </div>
    )
  }
}

export default App;
