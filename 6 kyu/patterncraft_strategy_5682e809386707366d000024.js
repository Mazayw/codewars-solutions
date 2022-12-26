class Fly {
  move(unit) {
    return (unit.position += 10)
  }
}

class Walk {
  move(unit) {
    return unit.position++
  }
}

class Viking {
  constructor() {
    this.position = 0
    this.moveBehavior = new Walk()
  }

  move() {
    return this.moveBehavior.move(this)
  }
}
