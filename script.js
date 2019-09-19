function GCF() {
	let a = +document.getElementById('num1').value;
	let b = +document.getElementById('num2').value;
	while ( b != 0 && a != 0) {
		if ( a > b ) {
			a = a % b;
		}
		b = b % a;
	}
	let result = a + b;
	// document.getElementById('result').value = a + b;
	alert(result);
}