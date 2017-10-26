function repeatStringNumTimes(str, num) {
  var answer = [];
  while(answer.length < num){
    answer.push(str);
  }
  return answer.join('');
}

console.log(repeatStringNumTimes("abc", 3));
