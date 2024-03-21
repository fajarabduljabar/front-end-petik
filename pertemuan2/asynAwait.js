// untuk membuat jeda maka pake setTimeout
// Biar berurutan maka pake parameter callback
// tahap membuat janji dan melaksanakan janji ada 2 cara , yaitu dengan menggunakan then catch atu asyn awaiy
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
   
// keyword asyn memberi tahu bahwa ada operasi asynchrnous di dalamnya
   async function main(params) {
     // solusi pengganti then catch bisa menggunakan asyn await
     console.log(await download());
     console.log(await verify());
     notify();

   }
   
   main();

//============kalau mau pake reject=====================

//    function download() {
//     return new Promise((resolve,reject) => {
//        setTimeout(() => {
//            reject("Download gagal");
//          }, 3000);
//     });
//    }
   
//    function verify() {
//     return new Promise((resolve,reject) => {
//        setTimeout(() => {
//            resolve("Verify selama 2 detik");
//          }, 2000);
//     });
//    }
   
//    function notify(params) {
//      console.log("Download Selesai");
//    }
   
// // keyword asyn memberi tahu bahwa ada operasi asynchrnous di dalamnya
//    async function main(params) {
//      // solusi pengganti then catch bisa menggunakan asyn await
//      try {
//         console.log(await download());
//      console.log(await verify());
//      notify();
//      } catch (error) {
//         console.log(error);
//      }
     

//    }
   
//    main();
   