iterate-objects
===============

Iterates over a JSON object and returns a key, tree path, and value

## Usage

```js
var iterator = require('iterator');
var obj = {
  "string": "test",
  "array": ["item1", "item2"],
  "nested": {
    "string": "cool"
  }
};
iterator.iterateObject(obj, function(key, path, value) {
  console.log(key, path, value)
});
```

## Tests

```
npm test
```

## Release History

* 0.1.0 Initial release
