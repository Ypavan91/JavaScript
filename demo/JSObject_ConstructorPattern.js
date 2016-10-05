/**
 * Created by Pauwan on 8/27/2016.
 */
var peopleConstructor = function (name, age, state) {

    this.name = name;
    this.age = age;
    this.state = state;

    this.printPerson = function () {
        console.log(this.name + "," + this.age + "," + this.state);
    };

};

var person1 = new peopleConstructor ("Pavan", 25, "TX");
var person2 = new peopleConstructor ("Kim", 23, "AZ");

person1.printPerson();
person2.printPerson();

//Problem with constructor pattern is everytime when we created a new object it contains printperson for each new object which is redundant. 