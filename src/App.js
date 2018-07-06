import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Views/Home';
import About from './Views/About';
import References from './Views/References';
import Apartments from './Views/Apartments';
import NotFound from './Views/NotFound';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="h40">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/kezdolap" component={Home}/>
            <Route path="/referenciak" component={References}/>
            <Route path="/lakasok" component={Apartments}/>
            <Route path="/kapcsolat" component={About}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
