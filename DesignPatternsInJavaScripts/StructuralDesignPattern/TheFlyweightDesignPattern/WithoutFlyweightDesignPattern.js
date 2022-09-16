class Grade {
    constructor(score) {
        var message;
        var letterGrade;
        if(score >= 90) {
            message = "Excelent";
            letterGrade = "A";
        } else if(score >= 75){
            message = "Very Good";
            letterGrade = "B";
        }else if(score >= 60){
            message = "Not Bad";
            letterGrade = "C";
        }else if(score >= 40){
            message = "Needs a lot of improvement";
            letterGrade = "D";
        }else{
            message = "Not living up to potential";
            letterGrade = "F";
        }
        this.letterGrade = letterGrade;
        this.message = message;
        this.randomNumber = Math.random(); // To check if the object is same or not
    }
}

class Student {
    constructor(name, score) {
        this.name = name;
        this.score = score;
        this.grade = new Grade(score);
    }
}

var studentNames = ["Anita", "Bella", "Charles", "Dora", "Emily"];
var studentScores = [99, 10, 91, 78, 45, 41, 50];
var studentList = [];
for (var i=0;i<7;i++) {
    studentList.push(new Student(studentNames[i], studentScores[i]));
}
console.log(studentList);

/**
 * In this case it is only possible to have A, B, C, D, and F grades by the
 * students. So, let's check in the console if the student with same grade
 * has same grade object or not by matching the randomNumber from grade
 * object.
 * 
 * And as we can observe that student with same grade has different grade
 * objects, which means if there are thousands of students there will thousands
 * of instances of grade object which will consume a lot of memory and is 
 * not an efficient way.
 * 
 * Let's see Flyweight pattern using which we can share the grade object between
 * students.
 */