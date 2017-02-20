import React from 'react';

export default class List extends React.Component
{
  send(status){
    var el=document.getElementById('money');
    var com=document.getElementById('comment');
    var bal=document.getElementById('balance');
    if (status==='plus')
      {bal.value=Number(bal.value)+Number(el.value)}
      else {bal.value=Number(bal.value)-Number(el.value)}
    console.log(bal.value);
    this.props.onSend(this.props.cost,el.value,com.value);
    el.value='';
    com.value='';
  }
  render(){
    return <div>

      <div className='list'>{this.props.items.map((price)=><p>{price.service}: {price.money}, {price.comment}</p>)}</div>
      <div className='list'>
        <span>{this.props.cost}</span>:<br />
        Сумма:<input id='money' type='text'/>
        Комментарий:<input id='comment' type='text'/>
        <button style={{display:'block',with:'100px', height:'30px',borderRadius:'10px',marginTop:'10px'}}onClick={()=>this.send(this.props.status)}>Добавить</button>
      </div>
    </div>
  }
}
