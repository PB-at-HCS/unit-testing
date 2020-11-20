const { isAllowedToDrive, isAllowedToDrink, isAllowedToVote } = require('./legal-age-checker');
const { getAge } = require('./access-database');

jest.mock('./access-database');

beforeEach(() => {
	getAge.mockReset();
});

describe('isAllowedToDrive', () => {
	it('should return true given age is 18', () => {
		getAge.mockImplementation(() => 18);
	  	expect(isAllowedToDrive("Paul")).toBe(true);
	});

	it('should return false given age is 17', () => {
		getAge.mockImplementation(() => 17);
	  	expect(isAllowedToDrive("Paul")).toBe(false);
	});

	it('should access the database when checking age', () => {
		getAge.mockImplementation(() => 17);
		isAllowedToDrive("Paul");
	  	expect(getAge.mock.calls.length).toBe(1);
	  	expect(getAge.mock.calls[0][0]).toBe("Paul");
	});
});

describe('isAllowedToDrink', () => {
	it('should return true given age is 16 and beverage is beer', () => {
		getAge.mockImplementation(() => 16);
	  	expect(isAllowedToDrink("Paul", "Beer")).toBe(true);
	});

	it('should return false given age is 17 and beverage is gin', () => {
		getAge.mockImplementation(() => 17);
	  	expect(isAllowedToDrive("Paul", "Gin")).toBe(false);
	});
});
