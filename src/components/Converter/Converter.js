import React from 'react';
import './Converter.css'

function Converter({currency, exchangeRate}) {

  const [ item, setItem ] = React.useState({});
  const [ result, setResult ] = React.useState('0');
  const [ input, setInput ] = React.useState('');
  const [ to, setTo ] = React.useState('USD')
  const [ from, setFrom ] = React.useState('RUB')
  // React.useEffect(() => {
  //   let valute = JSON.parse(localStorage.getItem('cur'))
  //   setItem(valute)
  // }, [])

  React.useEffect(() => {
    exchangeRate(from, to)
  }, [from, to])

  React.useEffect((i) => {
    i = input * currency.result
    setResult(i)

  }, [input, currency])

  function handelChangeInput(e) {
    setInput(e.target.value);
  }

  function handelChangeValues(e) {
    setTo(e.target.value)
  }

  function handelChangeValueFrom(e) {
    setFrom(e.target.value)
  }


  return (
    <section className='converter'>
      <form>
        <input value={input} onChange={handelChangeInput} className='converter__input' type="number" />
        <select value={from} onChange={handelChangeValueFrom}>
          <option disabled>Выберите валюту</option>
          <option value="GBP">GBP</option>
          <option value="USD">USD</option>
          <option value="RUB">RUB</option>
          <option value="EUR">EUR</option>
          <option value="CHF">CHF</option>
          <option value="JPY">JPY</option>
          <option value="UAH">UAH</option>
          <option value="PLN">PLN</option>
        </select>
        &#8658;
        <select value={to} onChange={handelChangeValues}>
          <option disabled>Выберите валюту</option>
          <option value="GBP">GBP</option>
          <option value="USD">USD</option>
          <option value="RUB">RUB</option>
          <option value="EUR">EUR</option>
          <option value="CHF">CHF</option>
          <option value="JPY">JPY</option>
          <option value="UAH">UAH</option>
          <option value="PLN">PLN</option>
        </select>

      </form>

      <p>{result} {to}</p>
    </section>
  )
}

export default Converter;
