const num1 = parseFloat(prompt('Podaj pierwszą liczbę'))
const operator = prompt('Podaj operator arytmetyczny(+, -, *, / lub %)')
const num2 = parseFloat(prompt('Podaj drugą liczbę'))
let z2j = true

if (isNaN(num1) || isNaN(num2)) {
	alert('Użyłeś złego znaku, odśwież stronę!')
} else if (operator === '/' && num2 === 0) {
	alert('Nie dzielimy przez zero!')
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
	while (z2j) {
		let op2 = prompt('Podaj operator arytmetyczny(+, -, *, / lub %). Zostaw puste aby zakończyć.')
		if (!op2) break
		let num3 = prompt('Podaj kolejną liczbę')
		alert(`${num1} ${op2} ${num3}`)
	}
}
