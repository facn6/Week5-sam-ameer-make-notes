const test = require('tape');
const supertest = require('supertest');
const router = require('../src/router.js');
const utils = require('../src/utils.js');

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

test('Check that assetsContents function is a pure function that returns array of objects', (t) => {
  const folder = '../tests';
  const folderCheck = folder;
  const actual = utils.folderContents(folder);
  const expected = [{
    name: 'tests.js',
    filepath: '/Users/samjam/Code/founders-and-coders/course/5-node-advanced/make-notes-project/tests/test.js',
  }];
  t.deepEqual(actual, expected, 'returns array of correct objects');
  t.deepEqual(folder, folderCheck, 'does not mutate arguments passed to it');
  t.deepEqual(actual, expected, 'returns same result given same arguments');
});
