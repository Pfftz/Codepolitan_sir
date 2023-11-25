// let angka = Math.random();
// console.log(angka);

// if (angka >= 0.5) {
//     alert('angka lebih besar dari 0.5');
// } else {
//     alert('angka lebih kecil dari 0.5');
// }

const password = prompt('Buat password');

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        alert('Password tidak boleh mengandung spasi!');
    } else {
        alert('Password berhasil dibuat!');
    }
} else {
    alert('Password terlalu pendek!');
}

