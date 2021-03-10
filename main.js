/* A project by Md Irtiaz Kabir to expand a polynomial raised to a specific integer (strictly greater than 0) power
 *
 * Enter the polynomial in this array
 * By entering the co-efficients of the terms in an ascending order of power of x
 * For example: (1 + 4x^3 - 4x^4) will be equivalent to (1 + 0x + 0x^2 + 4x^3 - 4x^4)
 * and should be entered as follows : 
 * 									polynomial = [1, 0, 0, 4, -4]
 * and the expansion power is n
 * for example if we want to expand (1 + 4x^3 - 4x^4)^6 then enter n = 6
 *
 * I made a helper function for displaying a polynomial as well
 * the first parameter of the function is the polynomial_array and the second parameter(optional) is the power we have to raise it to
 *
 *
**/


const polynomial = [1, 0, 0, 4, -4];
const n = 6;

let current = polynomial.slice();

for (let i = 0; i < n - 1; ++i) {
	let multiplied_poly = [];
	for (let j = 0; j < current.length; ++j) {
		for (let k = 0; k < polynomial.length; ++k) {
			const mul = current[j] * polynomial[k];
			const power = j + k;
			const valueAtPower = multiplied_poly[power]? multiplied_poly[power] + mul : mul;
			multiplied_poly[power] = valueAtPower;
		}
	}
	for (let j = 0; j < multiplied_poly.length; ++j) {
		current[j] = multiplied_poly[j]? multiplied_poly[j] : 0;
	}
}

expressPolynomial(polynomial, n);
expressPolynomial(current);



function expressPolynomial(arr, power) {
	let str = '';
	let noTerms = true;
	for (let i = 0; i < arr.length; ++i) {
		if (arr[i] != 0) {
			if (!noTerms) {
				if (arr[i] < 0) str += ' - ';
				else str += ' + ';
			}
			else noTerms = false;
			if (i == 0 || arr[i] != 1||(i > 0 && arr[i] != 1)) str += Math.abs(arr[i]);
			if (i > 1) str += `x^${i}`;
			else if (i == 1) str += 'x';
		}
	}
	if (power != undefined && power != 1) {
		str = `(${str})^${power}`;
	}
	console.log(str);
}
