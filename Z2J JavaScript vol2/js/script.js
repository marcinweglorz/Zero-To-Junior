let num1 = parseFloat(prompt('Podaj pierwszą liczbę'))
let operator = prompt('Podaj operator arytmetyczny(+, -, *, / lub %')
let num2 = parseFloat(prompt('Podaj drugą liczbę'))
let result = 0

if (isNaN(num1) || isNaN(num2)) {
	alert('Użyłeś złego znaku, odśwież stronę!')
} else {
	if (operator == '+') {
		result = +num1 + +num2
	} else if (operator == '-') {
		result = num1 - -(-num2)
	} else if (operator == '*') {
		result = num1 * num2
	} else if (operator == '/') {
		result = num1 / num2
	} else if (operator == '%') {
		result = num1 % num2
	}

	alert(num1 + operator + num2 + ' = ' + result)
}
