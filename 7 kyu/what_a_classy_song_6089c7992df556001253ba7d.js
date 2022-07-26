class Song {
  constructor (title, artist ){
    this.title = title;
    this.artist = artist;
    this.listeners = [];
  }
  
  howMany([...arr]){
    const today = [];
    arr.forEach(el =>{
      const found = this.listeners.some(element => element === el.toLowerCase());
      if (!found) {
        this.listeners.push(el.toLowerCase());
        today.push(el.toLowerCase());
      }
  })
    return today.length;
  }  
}