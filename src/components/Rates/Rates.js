import React from "react";
import './Rates.css';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';

function Rates({rates, lastQuote}) {

  const [ isBase, setBase ] = React.useState('USD')

  const [ currencyOnDisplay, setCurrencyOnDisplay ] = React.useState(() => {
    if (window.innerWidth > 1279) {
      return 9
    } else if (window.innerWidth > 768) {
      return 6
    } else if (window.innerWidth > 320) {
      return 4
    }
  })

  const [ addCurrencyBtn, setCurrencyBtn ] = React.useState(() => {
    if (window.innerWidth > 1279) {
      return 6
    } else if (window.innerWidth > 768) {
      return 3
    } else if (window.innerWidth > 320) {
      return 2
    }
  })

  const RatesData = rates.slice(0, currencyOnDisplay)


  React.useEffect(() => {
    lastQuote(isBase)
  }, [isBase])

  function handelChangeSelect(e) {
    setBase(e.target.value)
  }

  function handelAddCurrency(e) {
    e.preventDefault();
    setCurrencyOnDisplay(i => i + addCurrencyBtn)
  }

  return (
    <section className="rates">
      <select className="rates__select" onChange={handelChangeSelect} value={isBase}>
        <option value="GBP">GBP</option>
        <option value="USD">USD</option>
        <option value="RUB">RUB</option>
        <option value="EUR">EUR</option>
        <option value="CHF">CHF</option>
        <option value="JPY">JPY</option>
        <option value="UAH">UAH</option>
        <option value="PLN">PLN</option>
      </select>
      <ul className="rates__list">
        {
          RatesData.map((data) => {
            return (<Item
              data={data}
              key={Object.keys(data)}

            />)
          })
        }
      </ul>
      <button onClick={handelAddCurrency} className="rates___btn">Еще</button>
      <Link className="converter__link" to='/'>Конвертировать валюту</Link>
    </section>
  )
}


export default Rates;
