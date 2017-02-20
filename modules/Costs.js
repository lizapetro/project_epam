import React from 'react';

export default function(props)
{
  return <div>
      <ul className="costs">
        {props.items.map((name)=>{
          if (name==props.cost)
            return <li style={{border:'2px solid #85d290'}}><b>{name}</b></li>
          return <li onClick={()=>props.onSelect(name)}>{name}</li>
        })
        }
      </ul>
    </div>
}
