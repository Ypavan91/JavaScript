/**
 * Created by Pauwan on 8/27/2016.
 */
// Constructor function in JS is just a function that creates objects for us.

var Car = function(maxSpeed, driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function (speed, time) {
        console.log("Distance travelled by " + this.driver + " " + speed*time);
    };
    this.logDriver = function () {
        console.log("driver name is " + this.driver);
    }
}

var myCar = new Car(50,"Ninja");
var myCar1 = new Car(60,"James Bond");

myCar.logDriver();
myCar1.drive(25,7);
myCar.drive(50,3);