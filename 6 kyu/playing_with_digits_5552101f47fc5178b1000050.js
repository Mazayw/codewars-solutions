function digPow(n, p) {
	const numbersArr = n.toString().split('');
	let exp = p;
	let result = 0;
	numbersArr.forEach((element) => {
		result += Math.pow(element, exp);
		exp++;
	});
	const ret = result / n;
	if (Number.isInteger(ret) && ret >= 1) return ret;
	return -1;
}