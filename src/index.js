import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import HowItWork from './components/pages/HowItWork'
import Client from './components/pages/Client'
import Time from './components/pages/Time'
import Contact from './components/pages/Contact'

import registerServiceWorker from './registerServiceWorker'
import {Route, BrowserRouter} from 'react-router-dom'

const router = (
  <BrowserRouter >
    <div>      
      <Route exact path="/" component={ App } />
      <Route path="/how-it-work" component={ HowItWork } />      
      <Route path="/clients" component={ Client } />
      <Route path="/time" component={ Time } />
      <Route path="/contact" component={ Contact } />
    </div>  
  </BrowserRouter>    
)

ReactDOM.render(
  router,
  document.getElementById('root')
)
registerServiceWorker()
