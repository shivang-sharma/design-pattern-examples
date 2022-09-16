class ECommerceWebsite {
    constructor() {
        this.products = [
            'mobile phones',
            'books',
            'household items',
            'dog food',
            'fashion'
        ]
        this.observerMap = {}
        for (var i = 0; i<this.products.length;i++) {
            this.observerMap[this.products[i]] = [];
        }
    }
    subscribe(product, observerFn) {
        this.observerMap[product].push(observerFn);
    }
    unsubscribe(product, observerFn) {
        var observerFns = this.observerMap[product];
        for (var i = 0; i<observerFns.length; i++) {
            if (observerFns[i] === observerFn) {
                observerFns.splice(i, 1);
                break;
            }
        }
    }
    publish(product, message) {
        var observerFns = this.observerMap[product];
        for (var i=0; i<observerFns.length; i++) {
            observerFns[i](product, message);
        }
    }
}

var ecommerceWebsite = new ECommerceWebsite();

function observer_alice(product, message) {
    console.log(`**Recieved by Alice ${product} : ${message}`);
}

ecommerceWebsite.subscribe('mobile phones', observer_alice);
ecommerceWebsite.publish("mobile phones", "There is huge sale starting on iQOO smartphones!");

function observer_bob(product, message) {
    console.log(`**Recieved by Bob ${product} : ${message}`);
}
function observer_lily(product, message) {
    console.log(`**Recieved by Lily ${product} : ${message}`);
}
function observer_tom(product, message) {
    console.log(`**Recieved by Tom ${product} : ${message}`);
}
function observer_barry(product, message) {
    console.log(`**Recieved by Barry ${product} : ${message}`);
}
ecommerceWebsite.subscribe('mobile phones', observer_lily);
ecommerceWebsite.subscribe('books', observer_tom);
ecommerceWebsite.subscribe('household items', observer_bob);
ecommerceWebsite.subscribe('household items', observer_alice);
ecommerceWebsite.subscribe('fashion', observer_barry);

ecommerceWebsite.publish("mobile phones", "iQOO Z6 Pro launching tommorow!");
ecommerceWebsite.publish("books", "Read the latest book by Amish Tripathi");
ecommerceWebsite.publish("household items", "Huge discount on fresh grocceries!");
ecommerceWebsite.publish("fashion", "Explore latest product from Nike");

ecommerceWebsite.unsubscribe("household items", observer_bob);
ecommerceWebsite.publish("household items", "Get 30% discount on Oven");

