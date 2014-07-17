var _ = require('lodash');

/**
 * ### .iterateObject(obj, path, callback)
 *
 * Iterate over an object and provide a callback function for all values
 *
 * ```js
 * var obj = {
 *     prop1: {
 *         arr: ['a', 'b', 'c']
 *       , str: 'Hello'
 *     }
 *   , prop2: {
 *         arr: [ { nested: 'Universe' } ]
 *       , str: 'Hello again!'
 *     }
 * };
 *
 * var paths = [];
 * iterateObject(obj, function(key, path, value) {
 *   paths.push(path);
 * });
 * console.log(paths); // ['prop1.arr[0]', 'prop1.arr[1]', 'prop1.arr[2]', ...]
 * ```
 *
 * @param {Object} object
 * @param {String} path
 * @param {Function} callback
 */
var iterateObject = function(obj, path, callback) {
  if (typeof path === 'function') {
    callback = path;
    path = null;
  }
  _.forEach(obj, function(value, key) {
    var currentPath;
    if (_.isArray(obj)) {
      currentPath = path + '[' + key + ']';
    } else {
      currentPath = path ? path + '.' + key : key;
    }
    if (value && _.isArray(value)) {
      _.forEach(value, function(item, index) {
        var tempPath = currentPath + '[' + index + ']';
        if (!_.isObject(item) && !_.isArray(item)) {
          return callback(index, tempPath, item);
        }
        return iterateObject(item, tempPath, callback);
      });
    } else if (value && _.isObject(value)) {
      return iterateObject(value, currentPath, callback);
    } else {
      return callback(key, currentPath, value);
    }
  });
};

module.exports = {
  iterateObject: iterateObject
};
