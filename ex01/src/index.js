var myPet = {
  species: "husky",
  name: "wolf",
  legs: 4,
  friends: ["rex", "pal"],
};
function myFunction(myObj) {
  return myObj;
}
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };
