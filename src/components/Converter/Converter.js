import './Converter.css'

function Converter() {



  return (
    <section className='converter'>
      <input className='converter__input' type="number" />
      <select>
        <option disabled>Выберите валюту</option>
        <option value="dollasr" key="">dollasr</option>
      </select>
      &#8658;
      <select>
        <option disabled>Выберите валюту</option>
        <option value="dollasr" key="">dollasr</option>
      </select>
      <p>result</p>
    </section>
  )
}

export default Converter;
