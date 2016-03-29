'use strict'

const request = require('supertest')
const expect = require('chai').expect


const app = require('../app')


describe('loading express', function () {
  it('responds to /', done => {
    request(app)
      .get('/add?a=2&b=5')
      .expect(200)
      .end((err, res) => {
        expect(res.body.result).to.equal(7)
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
