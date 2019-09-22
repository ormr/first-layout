function GCF() {
	let a = Number(document.getElementById('num1').value);
	let b = Number(document.getElementById('num2').value);
	while (a != 0 && b != 0) {
		if (a > b) {
			a = a % b;
		} else {
			b = b % a;
		}
	}
	// output a + b
	document.write(`
	<p style="font-size: 44px; font-family: 'Montserrat'; color: #3636b3;">
		НОД: ${a + b}
	</p>`);
}