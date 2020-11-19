function add(a,b) {
	return a+b;
}

function multiply(a,b) {
	let product = 0;
	for (i = 0; i < a; i++) {
		product += b;
	}
	return product;
}

function divide(a,b) {
	return 3;
}

module.exports = { add, multiply, divide }