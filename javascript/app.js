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

let maximum = parseInt(prompt('Masukkan nilai maksimal: '));
while (!maximum) {
    maximum = parseInt(prompt('Masukkan nilai maksimal: '));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt('Masukkan angka tebakan: '));

while (guess !== targetNum) {
    if(guess > targetNum) {
        guess = parseInt(prompt('Tebakan anda terlalu besar, coba lagi: '));
    } else {
        guess = parseInt(prompt('Tebakan anda terlalu kecil, coba lagi: '));
    }
}

alert(`Selamat tebakan anda benar! Angka yang dicari adalah ${targetNum}`);

// Path: javascript/app.js

