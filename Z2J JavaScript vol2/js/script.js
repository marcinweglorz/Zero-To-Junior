function add(num1, num2) {
	return num1 + num2
}

function subtract(num1, num2) {
	return num1 - num2
}

function mult(num1, num2) {
	return num1 * num2
}

function divide(num1, num2) {
	if (num2 === 0) {
		alert('Nie dzielimy przez zero!')
	} else {
		return num1 / num2
	}
}
function percent(num1, num2) {
	return num1 % num2
}

let num1 = parseFloat(prompt('Podaj pierwszą liczbę: '))
let z2j = true

while (z2j) {
	let op = prompt('Podaj operator arytmetyczny(+, -, *, / lub %)')
	if (!(op === '+' || op === '-' || op === '/' || op === '*' || op === '%')) break
	let num2 = parseFloat(prompt('Podaj drugą liczbę: '))

	switch (op) {
		case '+':
			if (isNaN(num1) || isNaN(num2)) {
				alert('Użyłeś złego znaku, popraw się!')
			} else alert((num1 = add(num1, num2)))
			break
		case '-':
			if (isNaN(num1) || isNaN(num2)) {
				alert('Użyłeś złego znaku, popraw się!')
			} else alert((num1 = subtract(num1, num2)))
			break
		case '/':
			if (isNaN(num1) || isNaN(num2)) {
				alert('Użyłeś złego znaku, popraw się!')
			} else alert((num1 = divide(num1, num2)))
			break
		case '*':
			if (isNaN(num1) || isNaN(num2)) {
				alert('Użyłeś złego znaku, popraw się!')
			} else alert((num1 = mult(num1, num2)))
			break
		case '%':
			if (isNaN(num1) || isNaN(num2)) {
				alert('Użyłeś złego znaku, popraw się!')
			} else alert((num1 = percent(num1, num2)))
	}
}
