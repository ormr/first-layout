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
		<div style="text-align: center">
	<p style="font-size: 44px; font-family: 'Montserrat'; color: #3636b3;">
		НОД: ${a + b}
	</p>
	<a href="https://serafim-gavrilov.github.io/" 
	style="padding: 10px; background-color: #3636b3; color: #fff; text-decoration: none;
	font-family: 'Montserrat'; border-radius: 10px;">
		Вернуться
	</a>
	</div>
	`);
}

function GCD(a,b) {
	if(b == 0) return a;
	return gcd(b, a % b);
}