function rot13(str) {
  unCipher = [];
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt([i]);
    if(char < 65 || char > 90){
      unCipher.push(str[i]);
    } else if (char < 78) {
      unCipher.push(String.fromCharCode(char + 13));
    } else {
      unCipher.push(String.fromCharCode(char - 13));
    }
  }
  return unCipher.join('');
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR YBIR?"));

//given advanced answer
function rot13(str) {
  return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR YBIR?"));
