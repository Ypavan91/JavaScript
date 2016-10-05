/**
 * Created by Pauwan on 8/27/2016.
 */
var peoplePrototype = function () {

};
peoplePrototype.prototype.name = "No name";
peoplePrototype.prototype.age = 0;
peoplePrototype.prototype.city = "No city";

peoplePrototype.prototype.printPerson = function () {
    console.log(this.name + "," + this.age + "," + this.city);
};

var person1 = new peoplePrototype();
//person1.name = "Pavan";
person1.age = 25;
person1.city = "Irving";

console.log("name" in person1);
console.log("state" in person1);
console.log(person1.hasOwnProperty("name"));

person1.printPerson();