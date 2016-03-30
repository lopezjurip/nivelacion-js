'use strict'

const request = require('supertest')
const expect = require('chai').expect


const app = require('../app')


describe('loading express', function () {
  it('responds to /', done => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        expect(res.body.status).to.equal('on')
        done()
      })
  })

  it('responds to /add', done => {
    request(app)
      .get('/add?a=60&b=32')
      .expect(200)
      .end((err, res) => {
        expect(res.body.result).to.equal(60 + 32)
        done()
      })
  })

  it('404 everything else', done => {
    request(app)
      .get('/foo/bar')
      .expect(404, done)
  })
})

// TIP: To send query params use:
//  .send({ key: 'value' })
