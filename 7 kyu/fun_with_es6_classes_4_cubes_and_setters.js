class Cube {
  constructor(length) {
    this.length = length;
  }

  get surfaceArea() {
    return Math.pow(this.length, 2) * 6;
  }

  get volume() {
    return Math.pow(this.length, 3);
  }

  set surfaceArea(newArea) {
    this.length = Math.sqrt(newArea / 6);
  }

  set volume(newVolume) {
    this.length = Math.cbrt(newVolume);
  }
}