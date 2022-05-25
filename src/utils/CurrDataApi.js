var myHeaders = new Headers();
myHeaders.append("apikey", "Q8vOHhLV64eCKKbDCXDu3BscnfCmyzBu");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

export const Lair = (base) => {
  return fetch(`https://api.apilayer.com/fixer/latest?base=${base}`, requestOptions)
    .then(response => response.json())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));
}
