// callback -> function yang ada di dalam parameter function / parameter function berupa function

function salam(name, callback) {
  console.log("Hello" + name);

  callback();
}

function salamPisah(params) {
  console.log("Bye");
}

salam("Budi", salamPisah);
