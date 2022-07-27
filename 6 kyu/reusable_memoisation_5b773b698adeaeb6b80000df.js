function memo(fn) {
    const memo = {};
    return function (n) {
        const isObj = typeof n === 'object';
        let args =  (isObj) ? Array.prototype.slice.call(arguments) : n;
        let key = (isObj) ? JSON.stringify(args) : n;
        if (!(key in memo)) {
            memo[key] = (isObj) ? fn.apply(this, args) : fn(n);
        }
        return memo[key];
    }
}