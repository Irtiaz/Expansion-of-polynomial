# Expansion-of-polynomial-in-Javascript
A project by Md Irtiaz Kabir to expand a polynomial raised to a specific integer pwoer (strictly greater than `0`)
Enter the polynomial in this array
By entering the co-efficients of the terms in an ascending order of power of `x`
For example: `(1 + 4x^3 - 4x^4)` will be equivalent to `(1 + 0x + 0x^2 + 4x^3 - 4x^4)`
and should be entered as follows : 
 									`polynomial = [1, 0, 0, 4, -4]`
and the expansion power is `n`,
for example if we want to expand `(1 + 4x^3 - 4x^4)^6` then enter `n = 6`

If entered `polynomial = [1, 0, 0, 4, -4]` and `n = 6` then, the result we get is = `1 + 24x^3 - 24x^4 + 240x^6 - 480x^7 + 240x^8 + 1280x^9 - 3840x^10 + 3840x^11 + 2560x^12 - 15360x^13 + 23040x^14 - 9216x^15 - 26880x^16 + 61440x^17 - 57344x^18 + 6144x^19 + 55296x^20 - 81920x^21 + 61440x^22 - 24576x^23 + 4096x^24`

I made a helper function for displaying a polynomial as well : `expressPolynomial`
the first parameter of the function is the polynomial_array and the second parameter(optional) is the power we have to raise it to

