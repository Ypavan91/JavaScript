/**
 * Created by Pauwan on 8/27/2016.
 */
var myArray = new Array();
myArray[0] = 007;
myArray[1] = "Pavan";

var myCar = new Object();
myCar.maxSpeed = 120;
myCar.driver = "Pavan";
myCar.drive = function () {
    console.log("Now driving");
};
myCar.drive();

var myCar2 = {
    maxSpeed: 150,
    driver:"Pavan",
    drive: function(speed, time){
        console.log(speed*time);
    }
};
console.log(myCar2.driver);
myCar2.drive(50,6);


function person(name, age) {
    this.name = name;
    this.age = age;
}

var pavan = new person("Pavan", 24);
var james = new person("James", 26);

console.log(pavan.name + " is a junior of " + james.name);


