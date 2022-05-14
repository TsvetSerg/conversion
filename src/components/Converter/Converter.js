import React from 'react';
import './Converter.css'

function Converter({currency}) {

  const [item, setItem] = React.useState({})

  React.useEffect(() => {
    let valute = JSON.parse(localStorage.getItem('cur'))
    setItem(valute)
  }, [])

  // console.log(item);

  return (
    <section className='converter'>
      <input className='converter__input' type="number" />
      <select>
        <option disabled>Выберите валюту</option>
        <option value="dollasr" key="">RUB</option>
      </select>
      &#8658;
      <select>
        <option disabled>Выберите валюту</option>
        {/* <option value="dollasr" key="">{JSON.stringify(currency.USD.CharCode)}</option> */}
        {/* <option value="dollasr" key="">{JSON.stringify(item.USD.CharCode)}</option> */}
      </select>
      <p>result</p>
    </section>
  )
}

export default Converter;
