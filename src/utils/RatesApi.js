var myHeaders = new Headers();
myHeaders.append("apikey", "Q8vOHhLV64eCKKbDCXDu3BscnfCmyzBu");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

export const getRates = (base) => {
  return fetch(`https://api.apilayer.com/exchangerates_data/latest?base=${base}`, requestOptions)
    .then(response => response.json())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));
}

