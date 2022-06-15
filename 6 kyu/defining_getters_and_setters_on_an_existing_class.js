Object.defineProperty(Person.prototype, 'name', {
  enumerable: true,
  set: function (name) {
    this.firstName = name.split(' ')[0];
    this.lastName = name.split(' ')[1];
  },
  get: function () {
    return this.firstName + ' ' + this.lastName;
  },
});