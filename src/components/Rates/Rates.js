import React from "react";
import './Rates.css'

function Rates({rates, lastQuote}) {

  const [ isBase, setBase ] = React.useState('USD')

  React.useEffect(() => {
    lastQuote(isBase)
  }, [isBase])

  function handelChangeSelect(e) {
    setBase(e.target.value)
  }

  return (
    <section className="rates">
      <select className="rates__select" onChange={handelChangeSelect} value={isBase}>
        <option className="rates__opt" value="GBP">GBP</option>
        <option className="rates__opt" value="USD">USD</option>
        <option className="rates__opt" value="RUB">RUB</option>
        <option className="rates__opt" value="EUR">EUR</option>
        <option className="rates__opt" value="CHF">CHF</option>
        <option className="rates__opt" value="JPY">JPY</option>
        <option className="rates__opt" value="UAH">UAH</option>
        <option className="rates__opt" value="PLN">PLN</option>
      </select>
      <ul className="rates__list">
        <li className="rates__item">
          <h2>GBP</h2>
          <p>{rates.GBP}</p>
        </li>
      </ul>
    </section>
  )
}


export default Rates;
