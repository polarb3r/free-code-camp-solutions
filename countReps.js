//You will be given an array of strings:

//Return an object where the keys are the string and the value for each key is how many repetitions they have in the provided array

var names = ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante']

function countReps(elements){
  return elements.reduce(function (allNames, name) {
    if (name in allNames) {
      allNames[name]++;
    } else {
      allNames[name] = 1;
    }
    return allNames;
    }, {});
}

console.log(countReps(names));
