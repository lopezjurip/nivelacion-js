const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  // Send JSON
  res.send({ status: 'on' })
})

// localhost:3000/add?a=15&b=32
app.get('/add', (req, res) => {
  // TODO: We need to get 'a' and 'b' from 'req.query' object
  const a = Number(req.query.a) // ?
  const b = Number(req.query.b) // ?
  res.send({
    operation: `${a} + ${b}`,
    result: a + b,
  })
})

module.exports = app
