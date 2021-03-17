//Create a school object here
var lion = {
  name: "Simba",
  legs: 4,
  tails: 1,
};
//End of school object

function myFunction(roar, sound) {
  //Only change code below this line
  lion[roar] = sound;
  return lion;
  //Only change code below this line
}
console.log(myFunction("roar", "roar-roar"));
module.exports = myFunction;
