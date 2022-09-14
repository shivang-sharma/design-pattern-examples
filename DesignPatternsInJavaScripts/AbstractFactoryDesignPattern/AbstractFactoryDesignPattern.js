class Vehicle{
    constructor(vehicleType, make, model) {
        this.vehicleType = vehicleType;
        this.make = make;
        this.model = model;
    }
    printDetails() {
        console.log("Vehicle Type : ", this.vehicleType,
            "\nMake : ", this.make,
            "\nModel : ", this.model
        );
    }
    drive() {
        console.log("Drive ", this.vehicleType, this.make, this.model);
    }
    fillFuel() {
        console.log("Fill Fuel", this.vehicleType, this.make, this.model);
    }
};

class Car extends Vehicle {
    constructor(details) {
        super("car", details.make, details.model);
        this.carType = details.carType;
    }
    printDetails() {
        console.log("------Print Details");
        super.printDetails();
        console.log("Car Type : ", this.carType);
        console.log("------")
    }
}

class Truck extends Vehicle {
    constructor(details) {
        super("truck", details.make, details.model);
        this.truckType = details.truckType;
    }
    printDetails() {
        console.log("------Print Details");
        super.printDetails();
        console.log("Truck Type : ", this.truckType);
        console.log("------")
    }
}
class TwoWheeler extends Vehicle {
    constructor(details) {
        super("twowheeler", details.make, details.model);
        this.twoWheelerType = details.twoWheelerType;
    }
    printDetails() {
        console.log("------Print Details");
        super.printDetails();
        console.log("Two Wheeler Type : ", this.twoWheelerType);
        console.log("------")
    }
}
class VehicleFactory {
    constructor(vehicleType) {
        if (vehicleType == "car") {
            this.vehicleConstructor = Car;
        } else if (vehicleType == "truck") {
            this.vehicleConstructor = Truck;
        } else if (vehicleType == "twowheeler") {
            this.vehicleConstructor = TwoWheeler;
        }
    }
    createVehicle(details) {
        return new this.vehicleConstructor(details);
    }
}
class CarFactory extends VehicleFactory {
    constructor() {
        super("car");
    }
}
class TruckFactory extends VehicleFactory {
    constructor() {
        super("truck");
    }
}
class TwoWheelerFactory extends VehicleFactory {
    constructor() {
        super("twowheeler");
    }
}

var abstractVehicleFactory = (function(){
    var factoryTypes = {}
    return {
        getVehicle: function(vehicleType, details) {
            var vehicleFactory = factoryTypes[vehicleType];
            if (vehicleFactory) {
                return vehicleFactory.createVehicle(details)
            }
            return null;
        },
        registerVehicleFactory: function(vehicleType, vehicleFactory) {
            if (!vehicleFactory.__proto__.createVehicle) {
                throw new Error("CreateVehicle() method expected on the factory");
            }
            if (!vehicleFactory.vehicleConstructor) {
                throw new Error("VehicleConstructor expected  on the factory");
            }
            if (!vehicleFactory.vehicleConstructor.prototype.drive ||
                !vehicleFactory.vehicleConstructor.prototype.fillFuel) {
                throw new Error("Vehicle Constructor should have drive() and fillfuel() method");
            }
            factoryTypes[vehicleType] = vehicleFactory;
        }
    };
})();

abstractVehicleFactory.registerVehicleFactory("car", new CarFactory());
abstractVehicleFactory.registerVehicleFactory("truck", new TruckFactory());
abstractVehicleFactory.registerVehicleFactory("twowheeler", new TwoWheelerFactory());

var carDetails = {
    "make": "Honda",
    "model": "Civic",
    "carType": "sedan"
}
var car = abstractVehicleFactory.getVehicle("car", carDetails);

var truckDetails = {
    "make": "Ashok Leyland",
    "model": "DB08",
    "truckType": "flatbed"
}
var truck = abstractVehicleFactory.getVehicle("truck", truckDetails);

console.log("Abstract Factory", abstractVehicleFactory);
console.log("Car Factory", new TwoWheelerFactory());
console.log("Car Factory", new CarFactory());
console.log("Truck ", truck);