import './CSS/Pocketmon_listitem.css'
import React, {useState} from 'react';

function Pocketmon_listitem(Pocket,onRemove,onToggle) {

    const {id,name,img,checked} = Pocket

    return (
    <div class="card" style="col-md-3;" onDoubleClick={()=>{ontoggle(id)}}>
      <img src={img} class="card-img-top" alt=""/>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary" onClick={() => {onRemove(id)}}>삭제</a>
      </div>
    </div>
    
);}

export default Pocketmon_listitem;