export const getСurrency = () => {
  return fetch('https://www.cbr-xml-daily.ru/daily_json.js', {
    method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json'
    // }
  })
  .then((res) => {
    if(res.ok) {
      return res.json().then(data => {
        return Promise.resolve(data);
      })
    }
    return Promise.reject(res.status)
  })
}

// export const getСurrate = () => {
//   return fetch('https://currate.ru/api/', {
//     method: 'GET',
//     get: 'rates',
//     pairs: 'USDRUB',
//     key: 'ce7fc974e6ae2ee39357fdca760a0ee8',
//     // mode: 'no-cors'
//     headers: {
//         'Content-Type': 'application/json'
//       }
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
