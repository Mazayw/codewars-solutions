function betterThanAverage(classPoints, yourPoints) {
	const classPointsSum = classPoints.reduce((acc, cur) => acc + cur, 0);
	const average = classPointsSum / classPoints.length;
	return yourPoints > average;
}
