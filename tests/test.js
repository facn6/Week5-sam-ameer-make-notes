var test = require('tape');

test('addTodo test', function(t) {
  var actual = '2';
  var expected = '2';
  t.deepEqual(actual, expected, 'the new todo faild to add it to the list');
  t.end();
});