import React from "react";
import './Item.css'


function Item({data}) {
  return (
    <li className="item">
          <h2 className="item__title">{data}</h2>
          {/* <p className="item__subtitle">{rates.GBP}</p> */}
          <p className="item__subtitle">{data}</p>
        </li>
  )
}

export default Item;
