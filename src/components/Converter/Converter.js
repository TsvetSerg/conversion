import React from 'react';
import './Converter.css'

function Converter({currency, exchangeRate}) {

  // const [ item, setItem ] = React.useState({});
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
      <form className='converter__form'>

        <select className="converter__select" value={from} onChange={handelChangeValueFrom}>
          <option className="converter__opt" value="GBP">GBP</option>
          <option className="converter__opt" value="USD">USD</option>
          <option className="converter__opt" value="RUB">RUB</option>
          <option className="converter__opt" value="EUR">EUR</option>
          <option className="converter__opt" value="CHF">CHF</option>
          <option className="converter__opt" value="JPY">JPY</option>
          <option className="converter__opt" value="UAH">UAH</option>
          <option className="converter__opt" value="PLN">PLN</option>
        </select>

        <button className='converter__swap'></button>

        <select className="converter__select" value={to} onChange={handelChangeValues}>
          <option className="converter__opt" value="GBP">GBP</option>
          <option className="converter__opt" value="USD">USD</option>
          <option className="converter__opt" value="RUB">RUB</option>
          <option className="converter__opt" value="EUR">EUR</option>
          <option className="converter__opt" value="CHF">CHF</option>
          <option className="converter__opt" value="JPY">JPY</option>
          <option className="converter__opt" value="UAH">UAH</option>
          <option className="converter__opt" value="PLN">PLN</option>
        </select>

        <input placeholder='Введите число' className='converter__input' value={input} onChange={handelChangeInput} type="number" />
      </form>

      <p className="converter__result">{result} {to}</p>
    </section>
  )
}

export default Converter;
