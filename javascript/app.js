// let angka = Math.random();
// console.log(angka);

// if (angka >= 0.5) {
//     alert('angka lebih besar dari 0.5');
// } else {
//     alert('angka lebih kecil dari 0.5');
// }

// const password = prompt('Buat password');

// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log('Password berhasil dibuat!');
//     } else {
//         console.log('Password tidak boleh ada spasi!');
//     }
// } else {
//     console.log('Password terlalu pendek!');
// }

// && = and
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('Password berhasil dibuat!');
// } else {
//     console.log('Password tidak memenuhi kriteria!');
// }

// const role = prompt('Masukkan role anda');

// if (role === 'admin' || role === 'editor') {
//     console.log('Anda bisa masuk ke halaman admin dan editor');
// } else if (role === 'user') {
//     console.log('Anda bisa masuk ke halaman user');
// }
// else {
//     console.log('Anda hanya bisa masuk ke halaman home');
// }

// const studentRow = [
//     ['Andi', 'Budi', 'Caca'],
//     ['Deni', 'Euis', 'Fafa'],
//     ['Gilang', 'Hani', 'Ivan']
// ]

// for (let i = 0; i < studentRow.length; i++) {
//     const row = studentRow[i];
//     console.log(`Seat Row ${i + 1}`);
//     for (let j = 0; j < row.length; j++) {
//         console.log(`     ${row[j]}`);
//     }
// }

// let maximum = parseInt(prompt('Masukkan nilai maksimal: '));
// while (!maximum) {
//     maximum = parseInt(prompt('Masukkan nilai maksimal: '));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// let guess = parseInt(prompt('Masukkan angka tebakan: '));
// let attempt = 1;

// while (guess !== targetNum) {
//     if (guess === 'q') break;
//     attempt++;
//     if(guess > targetNum) {
//         guess = parseInt(prompt('Tebakan anda terlalu besar, coba lagi: '));
//     } else {
//         guess = parseInt(prompt('Tebakan anda terlalu kecil, coba lagi: '));
//     }
// }

// alert(`Selamat tebakan anda benar! Angka yang dicari adalah ${targetNum} dengan percobaan ${attempt} kali`);

//fungsi judi dadu
// function lemparDadu(){
//     console.log(Math.floor(Math.random() * 6) + 1);
// }

// function duakali(func){
//     func();
//     func();
// }

// function lemparDadu(){
//     const hasil = Math.floor(Math.random() * 6) + 1;
//     console.log(hasil);
// }

//foreach
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// angka.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el);
//     }
// });

// const animes = [
//     {
//         judul: 'Naruto',
//         rating: 8.5,
//         status: 'ongoing'
//     },
//     {
//         judul: 'One Piece',
//         rating: 9.0,
//         status: 'ongoing'
//     },
//     {
//         judul: 'Bleach',
//         rating: 8.0,
//         status: 'completed'
//     },
//     {
//         judul: 'Death Note',
//         rating: 9.5,
//         status: 'completed'
//     },
//     {
//         judul: 'Dragon Ball',
//         rating: 8.0,
//         status: 'completed'
//     }
// ];

// animes.forEach(function (anime) {
//     console.log(`${anime.judul} - ${anime.rating}/10 - ${anime.status}`);
// });

//map
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const factorial = angka.map((el) => {
//     let total = 1;
//     for (let i = el; i > 0; i--) {
//         total *= i;
//     }
//     return total;
// });

// const animek = animes.map((anime) => {
//     return anime.rating * 10;
// });

//return implisit pada arrow function
// const random = () => (Math.floor(Math.random() * 6) + 1);
// const pangkat = (a, b) => (a ** b); 

//settimeout dan setinterval
// console.log('Hello');
// setTimeout(() => {
//     console.log('nigger');
// }, 3000);

// const interval = setInterval(() => {
//     console.log("hitam");
// }, 2000);

//every && some
const examScore = [69, 70, 85, 66, 90, 100, 74, 75, 65];
const isGraduate = examScore.every((score) => score >= 75);
const isLulus = examScore.some((score) => score >= 75);

const subtotal = [1500, 20000, 40000, 60000, 70000];
const total = subtotal.reduce((currentTotal, singleSubtotal) => {
    return currentTotal + singleSubtotal
})

// Path: javascript/app.js