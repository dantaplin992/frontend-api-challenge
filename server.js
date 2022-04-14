const { response } = require('express')
const express = require('express')
const path = require('path')
const serveIndex = require('serve-index')
const apiConnection = require('./src/apiConnection.js')
const bodyParser = require('body-parser')
const session = require('express-session')

const app = express()
const PORT = 3000

app.set('view engine', 'ejs');
app.use(express.json())

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static(__dirname + '/src/'))
app.use(express.static(__dirname + '/public/'))

app.use((req, res, next) => {
  console.log('Time: ', (new Date()).toISOString())
  next()
})

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`)
  next()
})

app.get('/', (req, res) => {
  apiConnection.getPeepAsync()
  .then((result) => {
    res.render('index', {allPeeps: result})
  })
})

app.get('/new-user', (req, res) => {

})

app.get('/peep', (req, res) => {
  console.log(req.query.peepId)
  apiConnection.getPeepAsync(req.query.peepId)
  .then((result) => {
    res.render('peep', { peep: result })
  })
})

// app.post('/accounts', (req, res) => {
//   const incomingAccount = req.body
//   accounts.push(incomingAccount)
//   response.json(accounts)
// })

app.listen(PORT, () => console.log(`Chitter 2 app is listening on port ${PORT}`))