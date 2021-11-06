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
    let studentExists = this.students.filter((member) => member.email === student.email).length
    if(studentExists) {
      console.log('Already registered')
    } else {
      console.log(`Registering ${this.email} to the bootcamp ${this.community}`)
      this.students.push(student)
    }
  }
}

const kristen = new Student('Kristen', 'kristen123@gmail.com', 'Nucamp')
const frank = new Student('Frank', 'frank123@gmail.com', 'Nucamp')
const nucamp = new Bootcamp('Kristen', 2)
const otherCamp = new Bootcamp('Frank', 2)
nucamp.registerStudent(Kristen)
console.log('Kristen', nucamp)