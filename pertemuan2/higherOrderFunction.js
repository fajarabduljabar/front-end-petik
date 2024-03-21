// ======================== HIGHERORDERFUNCTION ============================
// FILTER, MAP, REDUCE

// ========== FILTER ===========
// const numbers = [3, -5, 8, 1, 2, 9, 7, -1, 6];
// // filter, map, reduce
// // mencari angka > 3
// // diambil satu satu dari banyak angka
// const filterNumber =numbers.filter((number) => {
//     return number > 3;
// });
// console.log(filterNumber);

// =========== MAP ============
// mengkalikan setiap elemen array dengan 2
// const numbers = [3, -5, 8, 1, 2, 9, 7, -1, 6];

// const mapNumber = numbers.map((number)=> number * 2);
// console.log(mapNumber);

// ============ REDUCE =============
const numbers = [3, -5, 8, 1, 2, 9, 7, -1, 6];
// nilai accumulator awalnya 0
// alunya kaya di bawah ini, jadi di tambahkan satu satu
// 0 + 3 = 3
// 3 + (-5) = -2
// -2 + 8 = 6
// 6 + 1 = 7
// 7 + 2 = 9
// 9 + 9 = 18
// 18 + 7 = 25
// 25 + (-1) = 24
// 24 + 6 = 30
// parameternya bisa di ganti, tapi defaultnya  adalah (accumulator, currentValue
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
// nilai accumulator awalnya 0
// accumulator = nilai hasil penjumlahan
// currentValue = nilai saat ini
console.log(sum);
