
/*You will be given a string featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump three characters. So:
*/
console.log(isCaught('C.....m')); // => false
console.log(isCaught('C..m')); // => true
console.log(isCaught('..C..m')); // => true


function isCaught(newString){
  return newString.split('C').pop().split('m').shift().length<=2;
}
