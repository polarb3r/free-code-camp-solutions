
function truncateString(str, num) {
  while(num >= str.length){
    return str;
  }
  str = str.slice(0, num);
  if (str.length - 3 < 0){
    return str += '...';
  } else {
    str = str.slice(0, -3);
    return str  += '...';
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("Absolutely Longer", 2));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
