/**
 * Created by Pauwan on 8/27/2016.
 */
var peopleFactory = function (name, age, state) {
    var temp = {}

    temp.name = name;
    temp.age = age;
    temp.state = state;

    temp.printPerson = function () {
        console.log(this.name + "," + this.age + "," + this.state);
    }
    return temp;

};

var person1 = peopleFactory ("Pavan" , 25, "TX");
var person2 = peopleFactory ("Hari" , 25, "KS");

person1.printPerson();
person2.printPerson();