// segitiga bintang
// let hasil = "";
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     console.log((hasil += "* "));
//   }
//   console.log((hasil += "\n"));
// }

// segitiga bintang terbalik
// let star = "";
// for (let i = 5; i >= 1; i--) {
//   for (let j = 0; j >= 1 - i; j--) {
//     star += "*";
//   }
//   star += "\n";
// }
// console.log(star);

// segitiga angka
// let a = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 0; j < i; j++) a += i;
//   console.log(a);
//   a = "";
// }

let angka = "";
for (let i = 5; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    angka += j;
  }
  angka += "\n";
}
console.log(angka);
