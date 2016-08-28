/**
 * Created by Pauwan on 8/27/2016.
 */

var myCar = {

    driver: "Pavan",
    maxSpeed: 120,
    drive: function (speed, time) {
        console.log(speed*time);
    },
    logDriver: function(){
        console.log(this.driver + " is driving car at " + this.maxSpeed + "mph");
        console.log("Distance travelled " + this.maxSpeed);
    }

}

myCar.logDriver();
