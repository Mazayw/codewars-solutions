function generateName() {
  const chars ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = 6;
  let name = '';
  do {
    name = '';
    for (let i = 0; i < length; i++) {
      name += chars.charAt(Math.random() * chars.length);
    }
  } while (photoManager.nameExists(name));
  return name;
}