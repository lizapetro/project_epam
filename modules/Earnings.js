import React from 'react';
import Costs from './Costs.js';
import List from './List.js';
export default class Earning extends React.Component{
  constructor(){
    super();
    this.state={
      user:'Liza_Petrova',
      cost:'Зарплата',
      costs:[
        'Зарплата',
        'Стипендия',
        'Прочее'
      ],
      list:[
      ]
    };
  }
  selectCost(cost){
    this.setState({cost:cost});
  }
  send(service,money,comment){
    this.createList(service,money,comment)
  }
  createList(service,money,comment){
    var list=this.state.list;
    list.push({service,money,comment});
    this.setState({list});
  }

  render(){
    return <div className='Costs'>
    <h2>
      Доходы
    </h2>
      <Costs  cost={this.state.cost}
              items={this.state.costs}
              onSelect={(r) => this.selectCost(r)}/>
      <List items={this.state.list}
            cost={this.state.cost}
            status='plus'
            onSend={(s,m,c)=>this.send(s,m,c)}/>
    </div>
  }
}
