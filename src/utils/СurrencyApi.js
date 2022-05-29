var myHeaders = new Headers();
myHeaders.append("apikey", "FDyHWX2cb4vpCQtgz7Myoij4nd0KSBon");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

export const getСurrency = (from, to) => {
  return fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=1`, requestOptions)
    .then(response => response.json());
}



