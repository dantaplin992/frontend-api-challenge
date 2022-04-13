const fetch = require('node-fetch')

class ApiConnection {
  constructor() {

  }

  static getUser(id) {
    const url = `https://chitter-backend-api-v2.herokuapp.com/users/1`
    var user
    fetch(url)
    .then(response => {
      return response.json()
    })
    .then((data) => {
      document.querySelector("#test-class").innerText = data
    })
  }
}