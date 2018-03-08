import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import HowItWork from './components/pages/HowItWork'

import registerServiceWorker from './registerServiceWorker'
import {Router, Route, BrowserRouter} from 'react-router-dom'

const router = (
  <BrowserRouter >
    <div>      
      <Route path="/how-it-work" component={ HowItWork } />
      <Route exact path="/" component={ App } />
    </div>  
  </BrowserRouter>    
)

ReactDOM.render(
  router,
  document.getElementById('root')
)
registerServiceWorker()
