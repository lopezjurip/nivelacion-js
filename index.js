'use strict'

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
  // TODO: We need to get 'a' and 'b' from 'req.query'
  const a = 0 // ?
  const b = 0 // ?
  res.send({
    operation: `${a} + ${b}`,
    result: a + b,
  })
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})

console.log('Setup complete');
