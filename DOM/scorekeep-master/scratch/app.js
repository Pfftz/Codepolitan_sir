const p1Button = document.querySelector('#p1-button');
const p2Button = document.querySelector('#p2-button');
const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');
const resetto = document.querySelector('#reset');
const winningEleven = document.querySelector('#winpoint');

let p1Score = 0, p2Score = 0;
let winPoint = 5;
let isOver = false;

p1Button.addEventListener('click', function () {
	if (!isOver) {
		p1Score += 1;
		if (p1Score === winPoint) { isOver = true; }
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener('click', function () {
	if (!isOver) {
		p2Score += 1;
		if (p2Score === winPoint) { isOver = true; }
		p2Display.textContent = p2Score;
	}
});

function reset() {
	isOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
}

resetto.addEventListener('click', reset);

winningEleven.addEventListener('change', function () {
	winPoint = parseInt(this.value);
	reset();
});