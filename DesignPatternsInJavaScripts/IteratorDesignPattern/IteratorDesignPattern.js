var Iterator = {
    reset: function() {
        this.index = 0;
    },
    hasNext: function() {
        return this.index < this.items.length;
    },
    next: function() {
        if(!this.hasNext()) {
            throw new Error("No more items");
        }
        var currentItem = this.items[this.index];
        this.index++;
        return currentItem;
    },
    first: function() {
        this.reset();
        return this.next();
    },
    each: function(callbackFn) {
        for (var item = this.first(); this.hasNext(); item = this.next()) {
            callbackFn(item);
        }
        callbackFn(item);
    }
}
// Collection Student
class Student {
    constructor() {
        this.index = 0;
        this.items = [];
    }
    addStudent(name) {
        this.items.push(name);
    }
}
console.log(Student.prototype);
Object.assign(Student.prototype, Iterator);
var newCollection = new Student();
console.log(newCollection);

newCollection.addStudent("Jenna");
newCollection.addStudent("Alaric");
newCollection.addStudent("Stephen");
newCollection.addStudent("Samuel");

console.log(newCollection.first());
console.log("Has next ?", newCollection.hasNext());
console.log(newCollection.next());
console.log("Has next ?", newCollection.hasNext());
console.log(newCollection.next());
console.log("Has next ?", newCollection.hasNext());
console.log(newCollection.next());
// console.log("Has next ?", newCollection.hasNext());
// console.log(newCollection.next());
console.log("Reset", newCollection.reset());
console.log(newCollection.next());

newCollection.each(element => {
    console.log(`Hi ${element}`);
});