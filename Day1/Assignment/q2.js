const { lastname } = require("./Q1.JS");
const { firstname } = require("./Q1.JS");

let db = [

    { id: 1, fname: 'John', lname: 'Smith' },

    { id: 2, fname: 'Lucy', lname: 'Jark' },

    { id: 3, fname: 'Edward', lname: 'Capton' }

  ];

  class Student {

    constructor(id, firstname, lastname) {

      this.id = id;

      this.fname = firstname;

      this.lname = lastname;

    }

    save() {

      db.push(this);

    }

    edit() {

      const index = db.findIndex(student => student.id === this.id);

    /*   if (index) {
        index.firstname = firstname;
        index.lastname = lastname;
      } */  // needs manual 

      
      if (index !== -1) {
        db[index] = this;
      }else{
        throw new Errow("User not found with this id : " + this.id)
      }
    }

    static getById(id) {

      return db.find(student => student.id === id);

    }

    static getAll() {

      return db;

    }

    static deleteById(id) {

      const index = db.findIndex(student => student.id === id);

      if (index !== -1) {

        db.splice(index, 1);

      }

    }

  }

new Student(4, 'Tina', 'Xing').save(); //save to db

new Student(4, 'Miss', 'Xing').edit() //edit studentId with id=4

Student.deleteById(4); //remove studentId=4 from db

Student.getAll(); //return db;

Student.getById(1); //return {id:1, fname: 'John', lname: 'Smith'}