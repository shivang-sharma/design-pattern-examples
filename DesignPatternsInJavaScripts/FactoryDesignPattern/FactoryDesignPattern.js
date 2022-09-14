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

// Approach 1
class VehicleFactory {
    createVehicle(vehicleType, details) {
        var vehicleConstructor = Car;
        if (vehicleType == "car") {
            vehicleConstructor = Car;
        } else if (vehicleType == "truck") {
            vehicleConstructor = Truck;
        }
        return new vehicleConstructor(details);
    }
}

var vehicleFactory = new VehicleFactory();
console.log("Vehicle Factory : ", vehicleFactory);

var carDetails = {
    "make": "Honda",
    "model": "Civic",
    "carType": "sedan"
}

var car = vehicleFactory.createVehicle("car", carDetails);
console.log("Car : ", car);
car.printDetails();

var truckDetails = {
    "make": "Ashok Leyland",
    "model": "DB08",
    "truckType": "flatbed"
}

var truck = vehicleFactory.createVehicle("truck", truckDetails);
console.log("Truck : ", truck);
truck.printDetails();

// Better Approach
class CustomVehicleFactory {
    constructor(vehicleType) {
        if (vehicleType == "car") {
            this.vehicleConstructor = Car;
        } else if (vehicleType == "truck") {
            this.vehicleConstructor = Truck;
        }
    }
    createVehicle(details) {
        return new this.vehicleConstructor(details);
    }
}

var carFactory = new CustomVehicleFactory("car");
var carDetails = {
    "make": "Honda",
    "model": "Civic",
    "carType": "sedan"
}
var car = carFactory.createVehicle(carDetails)
console.log("Car : ", car);
car.printDetails();

var truckFactory = new CustomVehicleFactory("truck");
var truckDetails = {
    "make": "Ashok Leyland",
    "model": "DB08",
    "truckType": "flatbed"
}

var truck = truckFactory.createVehicle(truckDetails);
console.log("Truck : ", truck);
truck.printDetails();