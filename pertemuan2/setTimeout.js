// untuk membuat jeda maka pake setTimeout
// Biar berurutan maka pake callback
function download(callbackVerify) {
  setTimeout(() => {
    console.log("Download selama 3 detik");
    callbackVerify();
  }, 3000);
}

function verify(callbackNotify) {
  setTimeout(() => {
    console.log("Verify selama 2 detik");
    callbackNotify();
  }, 2000);
}

function notify(params) {
  console.log("Download Selesai");
}

function main(params) {
  // Biar berurutan maka solusinya pake callback, solusi jika 
  download(function () {
    verify(function () {
      notify();
    });
  });
}

main();
