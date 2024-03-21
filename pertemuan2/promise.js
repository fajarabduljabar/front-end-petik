// untuk membuat jeda maka pake setTimeout
// Biar berurutan maka pake parameter callback
// tahap membuat janji dan melaksanakan janji ada 2 cara , yaitu dengan menggunakan then catch atu asyn await
function download() {
 return new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Download selama 3 detik");
      }, 3000);
 });
}

function verify() {
 return new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Verify selama 2 detik");
      }, 2000);
 });
}

function notify(params) {
  console.log("Download Selesai");
}

function main(params) {
  // solusi callback hell yaitu menggunakan promise
  download().then((hasil) => {
    console.log(hasil);

    verify().then((hasil) => {
        console.log(hasil);

        notify();
        // untuk menampilkan error maka pake catch 
    }).catch((error) => {
        console.log(error);
    });
  });
}

main();



