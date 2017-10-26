//returns the opposite way

/*Write a function to balance who has overpaid and should be compensated or who has paid less.

The function should take one parameter: an object which represents the members of the group and the amount spent by each.

The function should return an object with the same names, showing how much money the members should pay or receive.

Negative number means they should receive money.*/

var group = {
    Amy: 20,
    Bill: 15,
    Chris: 10
}

function splitTheBill(group) {
  var perPerson = (group.Amy + group.Bill + group.Chris)/3;
  //console.log(perPerson);
  for (var key in group) {
    group[key]-=perPerson;
  }
  return group;
}

console.log(splitTheBill(group)); // => { Amy: -5, Bill: 0, Chris: 5 }
