const { response } = require('express');
const express = require('express')
const path = require('path')
const serveIndex = require('serve-index')
const app = express()
// const portFile = require('./port.js')
const PORT = 3000

app.use(express.json())

app.use(express.static(__dirname + '/src/'))

app.use((req, res, next) => {
  console.log('Time: ', (new Date()).toISOString())
  next()
})

app.use('/request-type', (req, res, next) => {
  console.log('Request type: ', req.method)
  next()
})

app.get('/', (req, res) => {
  // res.send('Successful response')
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

// app.get('/accounts', (req, res) => {
//   res.json(accounts)
// })

// app.get('/accounts/:id', (req, res) => {
//   const accountId = Number(req.params.id)
//   const getAccount = accounts.find((account) => account.id === accountId)

//   if (!getAccount) {
//     res.status(500).send('Account not found')
//   } else {
//     res.json(getAccount)
//   }
// })

// app.post('/accounts', (req, res) => {
//   const incomingAccount = req.body
//   accounts.push(incomingAccount)
//   response.json(accounts)
// })

app.listen(PORT, () => console.log(`Chitter 2 app is listening on port ${PORT}`))