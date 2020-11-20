const { getAge, legalVotingAge } = require('./access-database');

function isAllowedToDrive(name) {
	return getAge(name) >= 18;
}

function isAllowedToDrink(name, beverage) {
	return beverage === 'Beer' && getAge(name) >= 16;
}

function isAllowedToVote(name, state) {
	return false;
}

module.exports = { isAllowedToDrive, isAllowedToDrink, isAllowedToVote };