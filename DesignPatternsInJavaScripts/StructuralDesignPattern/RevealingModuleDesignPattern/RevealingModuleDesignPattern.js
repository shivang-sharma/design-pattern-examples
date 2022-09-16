/**
 * By default in Revealing Module Design pattern all the functions and properties are
 * private and only selective functions are revealed to the client as per the requirement.
 * In this approach their is no requirment to reference 'this' in order to invoke any 
 * other functions.
 * 
 * Best Practices in Revealing Module Pattern
 * 1) Use 'private' prefix with the name of private functions which are not to be exposed publicly.
 * 2) Use 'public' prefix with the name of functions which you plan to reveal to the client.
 * 3) Use 'property' prefix when revealing any property.
 */
var randomCounterModule = (function() {
    var randomCounter = 0;
    var randomNumber = privateGetRandomNumber();
    function privateGetRandomNumber() {
        return Math.floor(Math.random() *10);
    }
    function privateLogCounterValue(message) {
        console.log(message, randomCounter);
    }
    function publicIncreamentCounter() {
        randomCounter = randomCounter + randomNumber;
        privateLogCounterValue("Counter after increament : ");
    }
    function publicDecreamentCounter() {
        randomCounter = randomCounter - randomNumber;
        privateLogCounterValue("Counter after dreament : ");
    }
    function publicResetCounter() {
        logCounterValue("Last Counter value : ");
        randomCounter = 0;
        logCounterValue("Counter value after reset : ");
    }
    function publicRandomlyIncreamentOrDecreament() {
        var number = randomNumber;
        if (number%2 == 0) {
            publicIncreamentCounter();
        } else {
            publicDecreamentCounter();
        }
    }
    return {
        randomNumberProperty: randomNumber,
        increament: publicIncreamentCounter,
        decreament: publicDecreamentCounter,
        randomIncreamentOrDecreament: publicRandomlyIncreamentOrDecreament,
        resetCounter: publicResetCounter
    }
})();