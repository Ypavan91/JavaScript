/**
 * Created by Pauwan on 8/27/2016.
 */
var peopleDynamicPrototype = function (name, age, state) {
    this.name = name;
    this.age = age;
    this.state = state;

    if (typeof this.printPerson !== "function"){
        peopleDynamicPrototype.prototype.printPerson = function () {
            console.log(this.name + "," + this.age + "," + this.state);
        };
    }
};

var person1 = new peopleDynamicPrototype("Pavan", 25, "TX");

console.log("name" in person1);
console.log("zipcode" in person1);
console.log(person1.hasOwnProperty("name"));

person1.printPerson();