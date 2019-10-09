function ExtendedGCF() {
	let x = Number(document.getElementById('num1').value);
	let y = Number(document.getElementById('num2').value);
	let a = 1, b = 0, g = x, u = 0, v = 1, w = y, q, a2, b2, g2;
	while (w > 0) {
		q = Math.floor(g/w);
		a2 = a;
		b2 = b;
		g2 = g;
		a = u;
		b = v;
		g = w;
		u = a2 - q * u;
		v = b2 - q * v;
		w = g2 - q * w;
	}
	document.write(`
		<div style="text-align: center">
	<p style="font-size: 44px; font-family: 'Montserrat'; color: #3636b3;">
		НОД: (${x},${y}): ${g}<br>
		a: ${a},
		b: ${b}
	</p>
	<a href="serafim-gavrilov.github.io/extended-euclidean-algorithm" 
	style="padding: 10px; background-color: #3636b3; color: #fff; text-decoration: none;
	font-family: 'Montserrat'; border-radius: 10px;">
		Вернуться
	</a>
	</div>
	`);
}