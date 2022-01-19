async function antiOptimizeAsync(task) {
  // Let's make this inefficient
  const promise = await new Promise(resolve => setTimeout(resolve,2000));
  return task();
}