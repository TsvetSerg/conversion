// export const getСurrency = () => {
//   return fetch('https://www.cbr-xml-daily.ru/daily_json.js', {
//     method: 'GET',
//     // headers: {
//     //   'Content-Type': 'application/json'
//     // }
//   })
//   .then((res) => {
//     if(res.ok) {
//       return res.json().then(data => {
//         return Promise.resolve(data);
//       })
//     }
//     return Promise.reject(res.status)
//   })
// }

// const API_KEY = 'Q8vOHhLV64eCKKbDCXDu3BscnfCmyzBu'


// export const getСurrency = (from, to) => {
//   return fetch('https://api.apilayer.com/exchangerates_data/convert/', {
//     method: 'GET',
//     redirect: 'follow',
//     // apikey: 'Q8vOHhLV64eCKKbDCXDu3BscnfCmyzBu',
//     // amount: '1',
//     // from: from,
//     // to: to,
//     headers: {
//       'apikey': 'Q8vOHhLV64eCKKbDCXDu3BscnfCmyzBu',
//       'amount': '1',
//       'from': 'USD',
//       'to': 'EUR',
//     }
//   })
  //   .then((res) => {
  //   if(res.ok) {
  //     return res.json().then(data => {
  //       return Promise.resolve(data);
  //     })
  //   }
  //   return Promise.reject(res.status)
  // })
// }

var myHeaders = new Headers();
myHeaders.append("apikey", "Q8vOHhLV64eCKKbDCXDu3BscnfCmyzBu");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

export const getСurrency = (from, to) => {
  return fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=1`, requestOptions)
    .then(response => response.json())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));
}



