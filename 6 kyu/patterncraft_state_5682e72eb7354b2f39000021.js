class SiegeState {
  constructor() {
    this.move = false
    this.dmg = 20
  }
}

class TankState {
  constructor() {
    this.move = true
    this.dmg = 5
  }
}

class Tank {
  constructor() {
    this.state = new TankState()
  }

  get canMove() {
    return this.state.move
  }
  get damage() {
    return this.state.dmg
  }
}
