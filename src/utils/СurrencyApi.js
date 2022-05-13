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
