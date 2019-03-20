function sorting(arrNumber) {
  // code di sini
  var pivot = arrNumber[0]
  var left = []
  var right = []
  if(arrNumber.length <= 1){
    return arrNumber
  }
  for(var i = 1 ; i < arrNumber.length ; i++){
    if(arrNumber[i] >= pivot){
      right.push(arrNumber[i])
    }
    if(arrNumber[i] < pivot){
      left.push(arrNumber[i])
    }
  }
  return sorting(left).concat(pivot,sorting(right))
}

function getTotal(arrNumber) {
  // code di sini
  var highest = arrNumber[arrNumber.length-1]
  var count = 0
  var result = ''
  if(arrNumber.length === 0){
    return ''
  }
  for(var i = 0 ; i < arrNumber.length ; i++){
    if(arrNumber[i] === highest){
      count += 1
    }
  }
  result += `angka paling besar adalah ${highest} dan jumlah kemunculan sebanyak ${count} kali`
  return result
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''