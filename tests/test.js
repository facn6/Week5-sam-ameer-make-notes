const test = require('tape');
const supertest = require('supertest');
const router = require('../src/router.js');

test('check status code is 200', (t) => {
  supertest(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      const expected = '';
      t.error(err);
      t.equal(res.text, expected, 'response should contain \'Hello\'');
      t.end();
    });
});
