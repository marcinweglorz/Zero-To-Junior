let num1 = parseFloat(+prompt('Podaj pierwszą liczbę: '))
let z2j = true

while (z2j) {
	let op = prompt('Podaj operator arytmetyczny(+, -, *, / lub %)')
	if (!(op === '+' || op === '-' || op === '/' || op === '*' || op === '%')) break

	let num2 = parseFloat(prompt('Podaj drugą liczbę: '))
	switch (op) {
		case '+':
			if (isNaN(num1) || isNaN(num2)) {
				alert('Użyłeś złego znaku, popraw się!')
			} else num1 += num2
			break
		case '-':
			if (isNaN(num1) || isNaN(num2)) {
				alert('Użyłeś złego znaku, popraw się!')
			} else num1 -= num2
			break
		case '/':
			if (isNaN(num1) || isNaN(num2)) {
				alert('Użyłeś złego znaku, popraw się!')
			} else if (num2 === 0) alert('Nie dzielimy przez zero!')
			else num1 /= num2
			break
		case '*':
			if (isNaN(num1) || isNaN(num2)) {
				alert('Użyłeś złego znaku, popraw się!')
			} else num1 *= num2
			break
		case '%':
			if (isNaN(num1) || isNaN(num2)) {
				alert('Użyłeś złego znaku, popraw się!')
			} else num1 %= num2
			break
	}
	alert(num1)
}
