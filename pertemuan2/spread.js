// spread operator -> untuk memisahkan array atau object menjadi 1 item (single value)
// notasinya adalah ... (titlk tiga)

// array
const fruits = ["Apel", "Anggur"];

// cara menggabungkan fruits dan newFruits -> tambahin spread operator
const newFruits = [...fruits, "Mangga", "Lemon"];

// console.log(newFruits);

// jadi array
// console.log(fruits);

// jadi item tersendiri menambahkan spread operator (...)
// console.log(...fruits);

const user = {
  name: "Budi Santoso",
  major: "Informatics",
};

const newUser = {
  ...user,
  age: 20,
};

console.log(newUser);
