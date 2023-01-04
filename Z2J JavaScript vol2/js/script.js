function add(num1, num2) {
	return num1 + num2
}

function sub(num1, num2) {
	return num1 - num2
}

function mul(num1, num2) {
	return num1 * num2
}

function div(num1, num2) {
	if (num2 === 0) {
		alert('Nie dzielimy przez zero!')
	} else {
		return num1 / num2
	}
}
function per(num1, num2) {
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
			} else alert((num1 = sub(num1, num2)))
			break
		case '/':
			if (isNaN(num1) || isNaN(num2)) {
				alert('Użyłeś złego znaku, popraw się!')
			} else alert((num1 = div(num1, num2)))
			break
		case '*':
			if (isNaN(num1) || isNaN(num2)) {
				alert('Użyłeś złego znaku, popraw się!')
			} else alert((num1 = mul(num1, num2)))
			break
		case '%':
			if (isNaN(num1) || isNaN(num2)) {
				alert('Użyłeś złego znaku, popraw się!')
			} else alert((num1 = per(num1, num2)))
	}
}
