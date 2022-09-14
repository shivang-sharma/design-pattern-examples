class PlainPerson {
    constructor(name, city, country) {
        this.name = name;
        this.city = city;
        this.country = country;
    }
    introduction() {
        console.log("Hi myself ", this.name, "I am from ", this.city, ", ", this.country);
    }
}

artistMixinFn = function() {}
artistMixinFn.prototype = {
    paintBeautifully: function() {
        console.log(this.name, " can paint beautifully.");
    },
    danceGracefully: function() {
        console.log(this.name, " can dance gracefully.");
    },
    singMelodiously: function() {
        console.log(this.name, " can sing melodiously.");
    }
}

function extend(destinationClass, sourceClass, methodList) {
    if(methodList && methodList.length != 0){
        for (var i=0; i<methodList.length; i++){
            destinationClass.prototype[methodList[i]] = sourceClass[methodList[i]];
        }
    } else {
        for (var methodName in sourceClass.prototype) {
            if(!destinationClass.prototype[methodName]) {
                destinationClass.prototype[methodName] = sourceClass.prototype[methodName];
            }
        }
    }
}

extend(PlainPerson, artistMixinFn, ["paintBeautifully"]);
var sam = new PlainPerson("Sam", "New York", "US");
