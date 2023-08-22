function generateHashtag(str) {
	if (!str.trim()) return false;
	const strCapitalized = str
		.split(' ')
		.map((el) => {
			return el.charAt(0).toUpperCase() + el.slice(1);
		})
		.join('');
	const result = '#' + strCapitalized;
	return result.length > 140 ? false : result;
}