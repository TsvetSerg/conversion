import React from "react";
import './Rates.css';
import Item from '../Item/Item';

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
      return 1
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
        <option className="rates__opt" value="GBP">1 GBP</option>
        <option className="rates__opt" value="USD">USD</option>
        <option className="rates__opt" value="RUB">RUB</option>
        <option className="rates__opt" value="EUR">EUR</option>
        <option className="rates__opt" value="CHF">CHF</option>
        <option className="rates__opt" value="JPY">JPY</option>
        <option className="rates__opt" value="UAH">UAH</option>
        <option className="rates__opt" value="PLN">PLN</option>
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
        {/* <li className="item">
          <h2 className="item__title">GBP</h2>
          <p className="item__subtitle">{rates.GBP}</p>
        </li>
        <li className="item">
          <h2 className="item__title">USD</h2>
          <p className="item__subtitle">{rates.USD}</p>
        </li>
        <li className="item">
          <h2 className="item__title">RUB</h2>
          <p className="item__subtitle">{rates.RUB}</p>
        </li>
        <li className="item">
          <h2 className="item__title">EUR</h2>
          <p className="item__subtitle">{rates.EUR}</p>
        </li>
        <li className="item">
          <h2 className="item__title">CHF</h2>
          <p className="item__subtitle">{rates.CHF}</p>
        </li>
        <li className="item">
          <h2 className="item__title">JPY</h2>
          <p className="item__subtitle">{rates.JPY}</p>
        </li>
        <li className="item">
          <h2 className="item__title">UAH</h2>
          <p className="item__subtitle">{rates.UAH}</p>
        </li>
        <li className="item">
          <h2 className="item__title">PLN</h2>
          <p className="item__subtitle">{rates.PLN}</p>
        </li>
        <li className="item">
          <h2 className="item__title">TRY</h2>
          <p className="item__subtitle">{rates.TRY}</p>
        </li> */}
      </ul>
      <button onClick={handelAddCurrency} className="rates___btn">Еще</button>
    </section>
  )
}


export default Rates;
