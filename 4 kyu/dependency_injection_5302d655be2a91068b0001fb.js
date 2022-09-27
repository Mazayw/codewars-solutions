/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
  this.dependency = dependency
}

DI.prototype.inject = function (func) {
  let meths = func.toString().match(/function\s?\((.+)\)\s?{/)
  meths =
    meths &&
    meths[1].split(',').map(function (i) {
      return i.replace(/\s+/, '')
    })
  const funcs = []

  for (var i = 0; meths && i < meths.length; i++) {
    funcs.push(this.dependency[meths[i]])
  }

  return function () {
    return func.apply(func, funcs)
  }
}