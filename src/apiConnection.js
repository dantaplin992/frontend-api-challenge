const fetch = require('node-fetch')

class ApiConnection {
  static async getPeepAsync(id = '') {
    const response = await fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${id}`)
    return response.json()
  }
}

module.exports.connection = new ApiConnection()
module.exports.getPeepAsync = ApiConnection.getPeepAsync