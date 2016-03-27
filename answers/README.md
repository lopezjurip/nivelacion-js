# Answers

## API

```js
app.get('/add', (req, res) => {
  // TODO: We need to get 'a' and 'b' from 'req.query' object
  const a = Number(req.query.a)
  const b = Number(req.query.b)
  res.send({
    operation: `${a} + ${b}`,
    result: a + b,
  })
})
```

## Test

```js
it('adds correctly two numbers', done => {
  const a = 10
  const b = 20
  request(app)
    .get('/add')
    .send({ a: a, b: b })
    .expect(200)
    .end((err, res) => {
      expect(res.body.result).to.equal(a + b)
      done()
    })
})
```
