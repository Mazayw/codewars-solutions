Array.prototype.reduce = function(process, initial) {
const arr = this
for (let i = 0; i < arr.length; i++) {
    if (initial === undefined && i === 0) {
        initial = arr[0]
        continue
    }
    initial = process(initial, arr[i], i)
}
return initial
}