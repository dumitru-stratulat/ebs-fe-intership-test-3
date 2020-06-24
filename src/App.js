import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './views/Home'
import ForecastDetailsView from './views/ForecastDetailsView'

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/hourly/:url" component={ForecastDetailsView} />
      </Switch>
    </div>
  </Router>
)

export default App;
