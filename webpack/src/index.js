import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/home';
import Itens from './pages/itens';
import Login from './pages/login';

import './index.css';
import './index.less';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/itens">
          <Itens />
        </Route>
        <Route path="/login/:id">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
