function totalDigitRekursif(angka) {
  var string = String(angka)
  var number = Number(string[0])
  if(string.length === 1){
    return number
  }
  return number + totalDigitRekursif(Number(string.slice(1, string.length)))
}
// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5