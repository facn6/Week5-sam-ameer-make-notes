const test = require('tape');
const router = require('../src/router.js');
const supertest = require('supertest');


test('check status code is 200', (t) => {
  supertest(router)
    .get("/")
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      var expected = '';
      t.error(err)
      t.equal(res.text, expected, 'response should contain \'Hello\'');
      t.end();
    });
});