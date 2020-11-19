const { add, multiply, divide } = require('./calculator');

// Not using describe and it can lead to confusion about what is tested why
test('adding 1 + 2 is equal to 3', () => {
  expect(add(1,2)).toBe(3);
});


// Adding describe and it gives more structure and makes it easier to only run tests for specific parts
describe('add', () => {
	it('should return 3 when adding 1 and 2', () => {
	  expect(add(1,2)).toBe(3);
	});
});

describe('multiply', () => {
	it('should return 15 when multiplying 3 and 5', () => {
	  expect(multiply(3,5)).toBe(15);
	});

	// Multiple expects in one test are possible
	it('should return 0 when multiplying anything with 0', () => {
	  expect(multiply(0,1)).toBe(0);
	  expect(multiply(0,5)).toBe(0);
	  expect(multiply(0,-4)).toBe(0);
	  expect(multiply(0,0)).toBe(0);
	  expect(multiply(1,0)).toBe(0);
	  expect(multiply(5,0)).toBe(0);
	  expect(multiply(-4,0)).toBe(0);
	});

	// Test fails because of bad implementation
	it('should return -20 when multiplying -4 and 5', () => {
	  expect(multiply(-4,5)).toBe(-20);
	});
});

// Insufficient testing
describe('divide', () => {
	it('should return 3 when dividing 15 by 5', () => {
	  expect(divide(15,5)).toBe(3);
	});
	
	// Skipped test because implementation missing
	xit('should do something when dividing by 0', () => {
	  // TODO
	  const expected = "???";
	  expect(divide(4,0)).toBe(expected);
	});
});
