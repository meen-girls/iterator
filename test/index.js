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

describe('deepMap', function() {
  it('key should always be a string', function() {
    iterator.deepMap(obj, function(key, path, value) {
      should.exist(key);
    });
  });
  it('path should always be a string', function() {
    iterator.deepMap(obj, function(key, path, value) {
      should.exist(path);
    });
  });
  it('value should always exist', function() {
    iterator.deepMap(obj, function(key, path, value) {
      should.exist(value);
    });
  });
  var results = iterator.deepMap(obj, function(key, path, value) {
    return {
      key: key,
      path: path,
      value: value
    };
  });
  it('results should be an array', function() {
    results.should.be.an('array');
  });
  it('results should be an array of 5 items', function() {
    results.should.have.length(5);
  });
  it('last item in results should have property value with cool', function() {
    results[4].should.have.deep.property('value', 'cool');
  });
});
