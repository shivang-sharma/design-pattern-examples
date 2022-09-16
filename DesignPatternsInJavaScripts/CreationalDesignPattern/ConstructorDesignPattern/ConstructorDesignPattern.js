// Approach 1 to create an object
var student = {};
console.log("Empty object student", student);

student.name = "Maze";
student["university"] = "McGill";
student.gpa = 3.4;

console.log("Student object with properties", student);

student.printDetails = function () {
    console.log("------Print Details------");
    console.log("Name", this.name,
                "University", this.university,
                "GPA", this.gpa);
    console.log("------------------------");
}
console.log("Student object with function", student);
student.printDetails();

// Approach 2 to create an object
var anotherStudent = Object.create(Object.prototype);
anotherStudent.name = "James";
anotherStudent.university = "Amazing University";
anotherStudent.gpa = 3.2;
anotherStudent.printDetails = function () {
    console.log("------Print Details------");
    console.log("Name", this.name,
                "University", this["university"],
                "GPA", this.gpa);
    console.log("------------------------");
}
console.log("Another Student object with function", anotherStudent);
anotherStudent.printDetails();


// Approach 3 to create an object
var yetAnotherStudent = new Object();
yetAnotherStudent.name = "Nancy";
yetAnotherStudent.university = "Intellligent University";
yetAnotherStudent.gpa = 3.2;
yetAnotherStudent.printDetails = function () {
    console.log("------Print Details------");
    console.log("Name", this.name,
                "University", this["university"],
                "GPA", this.gpa);
    console.log("------------------------");
}
console.log("Yet Another Student object with function", yetAnotherStudent);
yetAnotherStudent.printDetails();


// Approach 4 to create an object
function Student(name, university) {
    this.name = name;
    this.university = university;
}
Student.prototype.printDetails = function () {
    console.log("------Print Details------");
    console.log("Name", this.name,
                "University", this["university"],
                "GPA", this.gpa);
    console.log("------------------------");
}
var functionalTemplateStudent = new Student("Neon", "Mellon University");

console.log("Functional Template Student object with function", functionalTemplateStudent);
functionalTemplateStudent.printDetails();
functionalTemplateStudent.gpa = 3;
functionalTemplateStudent.printDetails();


// Approach 5 to create an object
class StudentClass {
    constructor(name, university, gpa) {
        this.name = name;
        this.university = university;
        this.gpa = gpa;
        this.showDetails = function () {
            console.log("------Print Student Details------");
            console.log("Name", this.name,
                        "University", this["university"],
                        "GPA", this.gpa);
            console.log("------------------------");
        }
    }
    // Below function outside constructor is added to the prototype object
    printDetails() {
        console.log("------Print Student Details------");
        console.log("Name", this.name,
                    "University", this["university"],
                    "GPA", this.gpa);
        console.log("------------------------");
    }
}
var syntacticalSugarTemplateStudent = new StudentClass("Lemso", "Pinnacle University", 3.4);
console.log("Syntactical Sugar Template Student object with function", syntacticalSugarTemplateStudent);