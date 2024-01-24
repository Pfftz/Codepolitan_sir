// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1000.png

const container = document.querySelector('#container');
const baseImgURL =
	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 1025; i++) {
	const pokeDex = document.createElement('div');
	pokeDex.classList.add('pokemon');

	const label = document.createElement('span');
	label.innerText = `#${i}`;

	const newImg = document.createElement('img');
	newImg.src = `${baseImgURL}${i}.png`;

	pokeDex.appendChild(newImg);
	pokeDex.appendChild(label);
	container.appendChild(pokeDex);
}
