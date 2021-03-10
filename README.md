# Expansion-of-polynomial-in-Javascript
A project by Md Irtiaz Kabir to expand a polynomial raised to a specific integer pwoer (strictly greater than `0`)
Enter the polynomial in this array
By entering the co-efficients of the terms in an ascending order of power of `x`
For example: `(1 + 4x^3 - 4x^4)` will be equivalent to `(1 + 0x + 0x^2 + 4x^3 - 4x^4)`
and should be entered as follows : 
 									polynomial = `[1, 0, 0, 4, -4]`
and the expansion power is `n`
for example if we want to expand `(1 + 4x^3 - 4x^4)^6` then enter `n = 6`

I made a helper function for displaying a polynomial as well : `expressPolynomial`
the first parameter of the function is the polynomial_array and the second parameter(optional) is the power we have to raise it to

