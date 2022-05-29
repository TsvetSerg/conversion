import React from 'react';
import './Converter.css'
import { Link } from 'react-router-dom';


function Converter({currency, exchangeRate, unit}) {


  const [ result, setResult ] = React.useState('0');
  const [ input, setInput ] = React.useState('1');
  const [ to, setTo ] = React.useState('USD');
  const [ from, setFrom ] = React.useState('RUB');

  React.useEffect(() => {
    exchangeRate(from, to)
  }, [from, to])

  React.useEffect((i) => {
    i = input * currency.result
    setResult(rounded(i))

  }, [input, currency])

  function handelChangeInput(e) {
    setInput(e.target.value.replace(/[^\d+$]/g, ''));
  }

  function handelChangeValues(e) {
    setTo(e.target.value)
  }

  function handelChangeValueFrom(e) {
    setFrom(e.target.value)
  }

  function hendelSwap(e) {
    e.preventDefault();
    let i = from;
    let g = to;
    let item = i;
    i = g;
    g = item;
    setFrom(i);
    setTo(g)
  }

  const rounded = function(number){
    return +number.toFixed(2);
}

  return (
    <section className='converter'>
      <form className='converter__form'>

        <div className='converter__wrap'>
          <input className='converter__input' autoComplete='off' type="text" value={input} onChange={handelChangeInput}/>
          <select className="converter__select" value={from} onChange={handelChangeValueFrom}>
            <option value="GBP">GBP</option>
            <option value="USD">USD</option>
            <option value="RUB">RUB</option>
            <option value="EUR">EUR</option>
            <option value="CHF">CHF</option>
            <option value="JPY">JPY</option>
            <option value="UAH">UAH</option>
            <option value="PLN">PLN</option>
          </select>
        </div>


        <button onClick={hendelSwap} className='converter__swap'></button>

        <div className='converter__wrap'>
          <input className='converter__input' type="text" autoComplete='off' value={result}/>
          <select className="converter__select" value={to} onChange={handelChangeValues}>
            <option value="GBP">GBP</option>
            <option value="USD">USD</option>
            <option value="RUB">RUB</option>
            <option value="EUR">EUR</option>
            <option value="CHF">CHF</option>
            <option value="JPY">JPY</option>
            <option value="UAH">UAH</option>
            <option value="PLN">PLN</option>
          </select>
        </div>

      </form>
      <p className="converter__result">1 {from} = {unit} {to}</p>
      <Link className='converter__link' to="/rates">Посмотреть курс всех валют</Link>

    </section>
  )
}

export default Converter;
