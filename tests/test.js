const test = require('tape');
const supertest = require('supertest');
const router = require('../src/router.js');

test('check home status code is 200', (t) => {
  supertest(router)
    .get('/')
    .end((err, res) => {
      t.error(err, 'does not have an error');
      t.equal(res.statusCode, 200, 'Returns 200 status code');
      t.equal(res.header['content-type'], 'text/html', 'Returns css file');
      t.end();
    });
});

test('check home style.css status code is 200', (t) => {
  supertest(router)
    .get('/style.css')
    .end((err, res) => {
      t.error(err, 'does not have an error');
      t.equal(res.statusCode, 200, 'Returns 200 status code');
      t.equal(res.header['content-type'], 'text/css', 'Returns css file');
      t.end();
    });
});

test('check home app.js status code is 200', (t) => {
  supertest(router)
    .get('/app.js')
    .end((err, res) => {
      t.error(err, 'does not have an error');
      t.equal(res.statusCode, 200, 'Returns 200 status code');
      t.equal(res.header['content-type'], 'application/javascript', 'Returns css file');
      t.end(err);
    });
});
