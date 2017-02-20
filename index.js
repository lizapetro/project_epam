import React from 'react';
import { render } from 'react-dom';
import App from './modules/App';
import {Router,Route,browserHistory,IndexRoute} from 'react-router';
import Spend from './modules/Spend';
import Earnings from './modules/Earnings';
import Home from './modules/Home';

render(<App/>, document.getElementById('app'));
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/spend" component={Spend}/>
      <Route path="/earnings" component={Earnings}/>
    </Route>
  </Router>
),document.getElementById('app'));
