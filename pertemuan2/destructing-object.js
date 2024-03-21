const user = {
    name: "Budi Santoso",
    age: 20,
    major: "Informatics",
};

// destructuring object
// cara pertama
// nama variabelnya harus sama dengan key nya
// const {name, age, major} = user; 


// cara ke 2
// bisa di custom variabelnya
const nama = user.name;
const umur = user.age;

console.log(nama);