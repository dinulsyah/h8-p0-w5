function changeVocals (str) {
  //code di sini
  var result = ''
  var alphabet = {
    'a':'b',
    'i':'j',
    'u':'v',
    'e':'f',
    'o':'p',
    'A':'B',
    'I':'J',
    'U':'V',
    'E':'F',
    'O':'P',
  }
  var keys = Object.keys(alphabet)
  for(var i = 0 ; i < str.length ; i++){
    var flag = false
    for(var j = 0 ; j < keys.length ; j++){
      if(str[i] === keys[j]){
        result += alphabet[keys[j]]
        flag = true
      }
    }
    if(!flag){
      result += str[i]
    }
  }
  return result
}

function reverseWord (str) {
  //code di sini
  return str.split('').reverse().join('')
}

function setLowerUpperCase (str) {
  //code di sini
  var result = ''
  for(var i = 0 ; i < str.length ; i++){
    if(str[i] >= 'a' && str[i] <= 'z'){
      var index = str.charCodeAt(i)
      index -= 32
      result +=  String.fromCharCode(index)
    }
    else if(str[i] >= 'A' && str[i] <= 'Z'){
      var index2 = str.charCodeAt(i)
      index2 += 32
      result +=  String.fromCharCode(index2)
    }
    else{
      result += str[i]
    }
  }
  return result
}

function removeSpaces (str) {
  //code di sini
  var result = ''
  for(var i = 0 ; i < str.length ; i++){
    if(str[i] !== ' '){
      result += str[i]
    }
  }
  return result
}

function passwordGenerator (name) {
  //code di sini
  if(name.length < 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  var name = changeVocals(name)
  name = reverseWord(name)
  name = setLowerUpperCase(name)
  name = removeSpaces(name)
  return name
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'