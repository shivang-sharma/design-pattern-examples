var Logger = (function() {
    var instance;
    class SingletonLogger {
        constructor() {
            this.randomNumber = Math.random();
        }
        log (message) {
            console.log("Logger ", this.randomNumber, message);
        }
    }
    return {
        getInstance () {
            if (!instance) {
                instance = new SingletonLogger();
            }
            return instance;
        }
    }
})()

var logger1 = Logger.getInstance();
var logger2 = Logger.getInstance();

logger1.log("Hellow logger 1");
logger2.log("Hellow logger 2");