function formatDuration (seconds) {
  const time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      result = [];

  if (seconds === 0) return 'now';
  
  for (let key in time) {
    if (seconds >= time[key]) {
      let val = Math.floor(seconds/time[key]);
      result.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }
 
  return result.length > 1 ? result.join(', ').replace(/,([^,]*)$/,' and'+'$1') : result[0]
}
