
// Approach 1
var school = {
    name: "Vidyagyan Leadership Academy",
    numStudents: 1200,
    enrollStudent: function(name) {
        console.log(`Enrolling  Student : ${name} in Vidyagyan Leadership Academy`);
    },
    conductClasses: function(subject) {
        console.log(`Conducting Class : ${subject} in Vidyagyan Leadership Academy`);
    }
}

var newSchool = Object.create(school);
console.log(school);
console.log(newSchool);

// Approach 2 with Best Practices.
var schoolPrototype = {
    // Define all the methods in the prototype and not the properties of the object.

    enrollStudent: function(studentName) {
        console.log(`Enrolling  Student : ${studentName} in ${this.name}`);
    },
    conductClasses: function(subject) {
        console.log(`Conducting Class : ${subject} in ${this.name}`);
    }   
}

var vidyagyanLeadershipAcademy = Object.create(schoolPrototype, {
    // Properties should be the part of the object creation
    "name": {
        value: "Vidyagyan Leadership Academy",
        writable: true,
        enumerable: true,
        configurable: true
    },
    "studentNum": {
        value: "1200",
        writable: true,
        enumerable: true,
        configurable: true
    }
})

console.log(vidyagyanLeadershipAcademy);

// Approach 3 Prototype pattern without using Object.create
var anotherSchoolPrototype = {
    init: function(name, numStudents) {
        this.name = name;
        this.numStudents = numStudents;
    },
    enrollStudent: function(studentName) {
        console.log(`Enrolling  Student : ${studentName} in ${this.name}`);
    },
    conductClasses: function(subject) {
        console.log(`Conducting Class : ${subject} in ${this.name}`);
    }
}

function createSchool(name, numStudents) {
    function School() {

    };
    School.prototype = anotherSchoolPrototype;
    var newSchool = new School();
    newSchool.init(name, numStudents);
    return newSchool;
}

var vidyagyan = createSchool("Vidyagyan", 1000);
console.log(vidyagyan);