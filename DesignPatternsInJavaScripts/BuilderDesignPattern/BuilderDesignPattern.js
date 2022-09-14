class Vehicle{
    constructor(vehicleType) {
        this.vehicleType = vehicleType;
    }
    printDetails() {
        console.log("Vehicle Type : ", this.vehicleType,
            "\nMake : ", this.make,
            "\nModel : ", this.model
        );
    }
};

class Car extends Vehicle {
    constructor() {
        super("car");
    }
}

class Truck extends Vehicle {
    constructor() {
        super("truck");
    }
}

var vehicleBuilder = (function () {
    var vehicleInstance=null;
    return {
        create: function(vehicleType) {
            switch(vehicleType) {
                case "car":
                    vehicleInstance = new Car();
                    break;
                case "truck":
                    vehicleInstance = new Truck();
                    break;                    
            }
            return this;
        },
        make: function(make) {
            vehicleInstance.make = make;
            return this;
        },
        model: function(model) {
            vehicleInstance.model = model;
            return this;
        },
        color: function(color) {
            vehicleInstance.color = color;
            return this;
        },
        wheels: function(wheels) {
            vehicleInstance.wheels = wheels;
            return this;
        },
        build: function() {
            if (!vehicleInstance.make || !vehicleInstance.model) {
                throw new Error("Please specify  make and model of the vehicle")
            }
            return vehicleInstance;
        }
    }
})()

console.log("Vehicle builder: ", vehicleBuilder)
var car = vehicleBuilder.create("car").make("make").model("model").build();
console.log(car);