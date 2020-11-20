function getAge(name) {
	return getRandomInt(40);
}

function getLegalVotingAge(region) {
	return 21 - getRandomInt(7);
}

module.exports = { getAge, getLegalVotingAge };