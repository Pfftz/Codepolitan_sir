const hitung = require('./rumus');
const motor = require('../../merkMotor'); // Corrected file path casing

console.log(hitung.penjumlahan(2, 3)); // Output: 5
console.log(hitung.pengurangan(2, 3)); // Output: -1
console.log(hitung.perkalian(2, 3)); // Output: 6
console.log(hitung.pembagian(6, 3)); // Output: 2
console.log(hitung.modulus(6, 3)); // Output: 0

console.log (hitung.perkalian(2, 3)/2); // Output: 3