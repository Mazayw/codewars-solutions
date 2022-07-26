class File {
  constructor(fullName, contents) {
    this._fullName = fullName;
    this._fileName = fullName.slice(0, fullName.lastIndexOf('.'));
    this._extension = fullName.slice(
      fullName.lastIndexOf('.') + 1,
      fullName.length
    );
    this.contents = contents;
    this._contentStrings = [];
    this._posString = 0;
    this._contentChar = [];
    this._posChar = 0;
  }

  get fullName() {
    return this._fullName;
  }

  get filename() {
    return this._fileName;
  }

  get extension() {
    return this._extension;
  }

  getContents() {
    return this.contents;
  }

  write(str) {
    this.contents += this.contents.length ? '\n' + str : str;
    this._contentStrings = [];
    this._posString = 0;
    this._contentChar = [];
    this._posChar = 0;
  }

  gets() {
    if (this._contentStrings.length === 0)
      this._contentStrings = [...this.contents.split('\n')];
    this._posString++;
    return this._contentStrings[this._posString - 1];
  }

  getc() {
    if (this._contentChar.length === 0)
      this._contentChar = [...this.contents.split('')];
    this._posChar++;
    return this._contentChar[this._posChar - 1];
  }
}