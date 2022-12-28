const num1 = parseFloat(prompt('Podaj pierwszą liczbę'))
const operator = prompt('Podaj operator arytmetyczny(+, -, *, / lub %')
const num2 = parseFloat(prompt('Podaj drugą liczbę'))
let result = 0

if (isNaN(num1) || isNaN(num2)) {
	alert('Użyłeś złego znaku, odśwież stronę!')
} else {
	switch (operator) {
		case '+':
			alert(num1 + num2)
			break
		case '-':
			alert(num1 - num2)
			break
		case '*':
			alert(num1 * num2)
			break
		case '/':
			alert(num1 / num2)
			break
		case '%':
			alert(num1 % num2)
			break
	}
}
