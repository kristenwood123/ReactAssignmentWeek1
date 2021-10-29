const { timeStamp } = require("console");

class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  }

  registerStudent(student) {
    const registeredStudents = this.students.filter(student => student.email !== student.email)
    this.students.push(registeredStudents)
  }
}

const Kristen = new Student('Kristen', 'kristen123@gmail.com', 'Nucamp')
const Frank = new Student('Frank', 'frank123@gmail.com', 'Nucamp')
const Nucamp = new Bootcamp('Kristen', 2)
const OtherCamp = new Bootcamp('Frank', 2)
Nucamp.registerStudent(Kristen)
console.log('Kristen', Nucamp)