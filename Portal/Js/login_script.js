
function myFunction() {
	var b = document.getElementById('psw');
	var	a = document.getElementById('icon');

	if (b.type == 'password') {
		b.type = 'text';
		a.classList.add('icofont-eye');
	} else {
		b.type = 'password';
		a.classList.remove('icofont-eye');
		a.classList.add('icofont-eye-blocked');
	}
}