import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/home';
import Imagem from './pages/image';

import './index.css';
import './index.less';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/item">
          <Imagem />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
