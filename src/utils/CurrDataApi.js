var myHeaders = new Headers();
myHeaders.append("apikey", "FDyHWX2cb4vpCQtgz7Myoij4nd0KSBon");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

export const Lair = (base) => {
  return fetch(`https://api.apilayer.com/fixer/latest?base=${base}`, requestOptions)
    .then(response => response.json());
}

export const Convert = (from, to) => {
  return fetch(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=1`, requestOptions)
  .then(response => response.json());
}
