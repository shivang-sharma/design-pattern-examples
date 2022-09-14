function Car(make, model, totalCost) {
    this.make = make;
    this.model = model;

    totalCost = totalCost;
    customFeatures = [];
    this.getTotalCost = function() {
        return totalCost;
    }
    this.getCustomFeatures = function() {
        return customFeatures;
    }
    this.printDetails = function() {
        console.log("Make : ", this.make,
        "Model : ", this.model,
        "Custom Features : ", this.getCustomFeatures(),
        "Total Cost : ", this.getTotalCost());
    }
};
// Below are the decorator functions
function customColor(car, color, cost) {
    var customFeatures = car.getCustomFeatures();
    var totalCost = car.getTotalCost();
    customFeatures.push("Color " + color);
    car.getCustomFeatures = function() {
        return customFeatures.concat();
    }
    car.getTotalCost = function() {
        return totalCost + cost;
    }
    return car;
}
function alloyWheels(car) {
    var customFeatures = car.getCustomFeatures();
    var totalCost = car.getTotalCost();

    customFeatures.push("Alloy Wheels");
    car.getCustomFeatures = function() {
        return customFeatures.concat();
    }
    car.getTotalCost = function() {
        return totalCost + 400;
    }
    return car;
}
function leatherSeats(car) {
    var customFeatures = car.getCustomFeatures();
    var totalCost = car.getTotalCost();

    customFeatures.push("Leather Seats");
    car.getCustomFeatures = function() {
        return customFeatures.concat();
    }
    car.getTotalCost = function() {
        return totalCost + 350;
    }
    return car;
}
function musicSystem(car) {
    var customFeatures = car.getCustomFeatures();
    var totalCost = car.getTotalCost();

    customFeatures.push("Music System");
    car.getCustomFeatures = function() {
        return customFeatures.concat();
    }
    car.getTotalCost = function() {
        return totalCost + 150;
    }
    return car;
}

var plainCar = new Car("Toyota", "Camry", 12000);
console.log(plainCar);
plainCar.printDetails();
var customizedCar = customColor(plainCar, "Red", 200);
console.log(customizedCar);
plainCar.printDetails();
customizedCar = alloyWheels(customizedCar);
console.log(customizedCar);
plainCar.printDetails();
customizedCar = leatherSeats(customizedCar);
console.log(customizedCar);
plainCar.printDetails();
customizedCar = musicSystem(customizedCar);
console.log(customizedCar);
plainCar.printDetails();

// Decorator chaining
var anotherCustomizedCar = musicSystem(leatherSeats(alloyWheels(customColor(new Car("Tata", "Harirer", 1500), "White", 200))));
console.log(anotherCustomizedCar);
anotherCustomizedCar.printDetails();

