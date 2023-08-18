function deleteNth(arr, n) {
	const count = {};
	const result = [];
	arr.forEach((el) => {
		if (Object.prototype.hasOwnProperty.call(count, el)) {
			count[el]++;
			if (count[el] <= n) {
				result.push(el);
			}
		} else {
			count[el] = 1;
			result.push(el);
		}
	});
	return result;
}

