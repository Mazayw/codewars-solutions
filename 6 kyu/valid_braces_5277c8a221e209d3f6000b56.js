function validBraces(braces) {
	const bracesObj = {
		'(': ')',
		'{': '}',
		'[': ']',
	};
	const res = [];
	for (let i = 0; i < braces.length; i++) {
		const el = braces[i];
		if (bracesObj.hasOwnProperty(el)) {
			res.push(el);
		} else if (bracesObj[res.pop()] !== el) {
			return false;
		}
	}
	return res.length === 0;
}