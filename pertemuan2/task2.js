/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
  console.log(`File ${result} downloaded`);
};

/**
 * Fungsi untuk download file
 * @param {function} callback - Function callback show
 */

const download = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      result = "Windows-10.exe";
      resolve("Download Success");
    }, 3000);
  });
}

// download(showDownload);

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */
const main = async () => {
  console.log(await download());
  showDownload(result);
};
main();
