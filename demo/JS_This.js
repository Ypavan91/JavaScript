/**
 * Created by Pauwan on 8/27/2016.
 */

var myCar = {

    driver: "Pavan",
    maxSpeed: 120,
    drive: function (speed, time) {
        console.log("Distance travelled " + speed*time);
    },
    logDriver: function(){
        console.log(this.driver + " is driving at max speed of " + this.maxSpeed + "mph");
    }

}

myCar.drive(25,4);
myCar.logDriver();
