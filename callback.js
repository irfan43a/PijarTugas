const penjumlahan = (value1, value2, cetak) => {
  const result = value1 + value2;
  cetak(result);
};

penjumlahan(10, 30, (hasil) => {
  console.log(`hasil penjumlahan nya adalaha ${hasil}`);
});
