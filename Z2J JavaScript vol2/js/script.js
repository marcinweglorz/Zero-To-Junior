let num1 = prompt('Podaj pierwszą liczbę')
let operator = prompt('Podaj operator arytmetyczny(+, -, *, / lub %')
let num2 = prompt('Podaj drugą liczbę')
let result = 0

if (operator == '+') {
	result = +num1 + +num2
} else if (operator == '-') {
	result = num1-- - num2
} else if (operator == '*') {
	result = num1 * num2
} else if (operator == '/') {
	result = num1 / num2
} else if (operator == '%') {
	result = num1 % num2
}

alert(num1 + operator + num2 + ' = ' + result)
