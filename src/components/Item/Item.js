import React from "react";
import './Item.css'


function Item({data}) {
  return (
    <li className="item">
      <h2 className="item__title">{Object.keys(data)}</h2>
      <p className="item__subtitle">{Object.values(data)}</p>
    </li>
  )
}

export default Item;
