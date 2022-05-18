import React from 'react';
import './Converter.css'

function Converter({currency}) {

  const [ item, setItem ] = React.useState({});
  const [ result, setResult ] = React.useState('0');
  const [ input, setInput ] = React.useState('');
  const [ val, setVal ] = React.useState('USD')

  // React.useEffect(() => {
  //   let valute = JSON.parse(localStorage.getItem('cur'))
  //   setItem(valute)
  // }, [])

  React.useEffect((i) => {
    i = input * currency.result
    setResult(i)

  }, [input])

  function handelChangeInput(e) {
    setInput(e.target.value);
  }

  function handelChangeValues(e) {
    setVal(e.target.value)
  }


  return (
    <section className='converter'>
      <form>
        <input value={input} onChange={handelChangeInput} className='converter__input' type="number" />
        <select>
          <option disabled>Выберите валюту</option>
          <option value="USD" key="">USD</option>
          {/* <option value="USD" key="">USD</option> */}
        </select>
        &#8658;
        <label>
          <select value={val} onChange={handelChangeValues}>
            <option disabled>Выберите валюту</option>
            <option value="EUR" key="">EUR</option>
            {/* <option value="GBR" key="">GBR</option> */}
            {/* <option value="RUB" key="">RUB</option> */}
          </select>
        </label>

      </form>

      <p>{result} {val}</p>
    </section>
  )
}

export default Converter;
