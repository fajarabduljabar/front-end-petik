// rest operator -> untuk menggabungkan

// tambahin manual
// function sum(a,b) {
//     return a + b;
// }

// console.log(sum(10,5));

// cara ke 2 tanpa manual pake titik 3 (...)
function sum(...numbers) {
  //   return numbers;
  // cara nambahin manual pake for of
  let hasil = 0;
  for (const number of numbers) {
    hasil = hasil + number;
  }
  console.log(hasil);
}
sum(10, 5, 9, 6, 8, 7, 5, 3, 2);
