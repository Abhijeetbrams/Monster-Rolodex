import React from "react";
import './card-list.css';
import './card-style.css';

function CardList(props)
{
    return(<div className="card-list">
  
  {props.filteredMonster.length!=0 &&
    props.filteredMonster.map((item, index) =>
    <div className="card-container"> 
    <img alt="monster" src={`https://robohash.org/${index}?set=set2&size=180*180`}/>
    <p key={index}>{item.name}</p>
   <p>{item.email}</p> 
   </div>)}
  {!props.searchName && props.monster && props.filteredMonster.length === 0 && props.monster.map((item, index) => (
    <div className="card-container"> 
    <img alt="monster" src={`https://robohash.org/${index}?set=set2&size=180*180`}/>
    <p key={index}>{item.name}</p>
   <p>{item.email}</p> 
   </div>
))}</div>);
}

export default CardList;