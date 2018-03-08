import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import HowItWork from './components/pages/HowItWork'
import Client from './components/pages/Client'

import registerServiceWorker from './registerServiceWorker'
import {Router, Route, BrowserRouter} from 'react-router-dom'

const router = (
  <BrowserRouter >
    <div>      
      <Route exact path="/" component={ App } />
      <Route path="/how-it-work" component={ HowItWork } />      
      <Route path="/clients" component={ Client } />
    </div>  
  </BrowserRouter>    
)

ReactDOM.render(
  router,
  document.getElementById('root')
)
registerServiceWorker()
