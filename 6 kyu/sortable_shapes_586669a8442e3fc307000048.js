class Shape {
  [Symbol.toPrimitive]() {
    return this.area
  }
}

class CustomShape extends Shape {
  constructor(area) {
    super()
    this.area = area
  }
}

class Square extends Shape {
  constructor(side) {
    super()
    this.area = Math.pow(side, 2)
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super()
    this.area = width * height
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super()
    this.area = (base * height) / 2
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()
    this.area = Math.PI * Math.pow(radius, 2)
  }
}
