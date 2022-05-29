var myHeaders = new Headers();
myHeaders.append("apikey", "FDyHWX2cb4vpCQtgz7Myoij4nd0KSBon");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

export const getRates = (base) => {
  return fetch(`https://api.apilayer.com/exchangerates_data/latest?base=${base}`, requestOptions)
    .then(response => response.json());
}

