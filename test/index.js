var should = require('chai').should();
var iterator = require('../index');

var obj = {
  "test": "this is a test",
  "nested": {
    "array": ["string", 0, {"wow": "who would do this"}]
  },
  "objectArray": [
    {
      "yeah": "cool"
    }
  ]
};

describe('iterateObject', function() {
  it('key should always be a string', function() {
    iterator.iterateObject(obj, function(key, path, value) {
      should.exist(key);
    });
  });
  it('path should always be a string', function() {
    iterator.iterateObject(obj, function(key, path, value) {
      should.exist(path);
    });
  });
  it('value should always exist', function() {
    iterator.iterateObject(obj, function(key, path, value) {
      should.exist(value);
    });
  });
});
