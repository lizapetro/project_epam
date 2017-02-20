import React from 'react';
import {Link} from 'react-router';
import Home from './Home';
import {IndexLink} from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className='main'>Контроль расходов</h1>
        <ul className='nav'>
          <li><IndexLink to='/' activeClassName='active'>Главная</IndexLink></li>
          <li><Link to='/earnings' activeClassName='active'>Доходы</Link></li>
          <li><Link to='spend' activeClassName='active'>Расходы</Link></li>
        </ul>
        {this.props.children || <Home/>}
      </div>
    )
  }
})
