var randomCounterModule = (function() {
    var randomCounter = 0;
    function getRandomNumber() {
        return Math.floor(Math.random() *10);
    }
    function logCounterValue(message) {
        console.log(message, randomCounter);
    }
    return {
        getCounter: function() {
            return randomCounter;
        },
        increamentCounter: function() {
            randomCounter = randomCounter + getRandomNumber();
            logCounterValue("Counter after increament : ");
        },
        decreamentCounter: function() {
            randomCounter = randomCounter - getRandomNumber();
            logCounterValue("Counter after dreament : ");
        },
        randomlyIncreamentOrDecreament: function() {
            // The drawback of module pattern that it requires the use if 'this' to access public functions
            var number = getRandomNumber();
            if (number%2 == 0) {
                this.increamentCounter();
            } else {
                this.decreamentCounter();
            }
        },
        resetCounter: function() {
            logCounterValue("Last Counter value : ");
            randomCounter = 0;
            logCounterValue("Counter value after reset : ");
        }
    }
})();