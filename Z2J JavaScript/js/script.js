if (confirm('Czy chcesz zostać junior developerem?👨🏻‍💻')) {
	alert('No to wskakuj na pokład!')
	let question = prompt('Ile godzin tygodniowo poświęcasz na nauke?⏰')
	if (question >= 6) {
		alert('Brawo! Lecisz jak burza wariacie! 🔥')
	} else if (question >= 4) {
		alert('Rozkręcasz się!🤗')
	} else {
		alert('Niestety musisz poświęcić więcej swojego czasu aby się rozwijać. 😔')
	}
} else {
	alert('To co tu jeszcze robisz?🤔')
}
