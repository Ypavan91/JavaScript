var Dog = function() {
  var name, breed;
  return console.log(this);
}

firstDog = new Dog;
firstDog.name = "Rover";
firstDog.breed = "Doberman";

secondDog = new Dog;
secondDog.name = "Fluffy";
secondDog.breed = "Poodle"

console.log(firstDog.name);
console.log(secondDog.name);