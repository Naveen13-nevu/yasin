//object in js are collection of key value pairs each key is called property

// if it is a function then we say as method

//key :value

// object.key or object{key}

// let student = {
//     name: "Naveen",
//     age: 24,
//     grade: "A",
// };
// console.log(student.name);
// console.log(student["name"]);

//Other Example

// let sla = {
//     name: "esthack",
//     age: 25,
//     yearOfBirth: function(){
//         return 2025 - this.age // reffering to this object
//     }
// }
// console.log(sla.yearOfBirth());

//Object De-structuring

// let student = {
//     name: "naveen",
//     age: 20,
//     blood :"0+ve"
// }
// let { name, age, blood } = student;
// console.log(blood);

// classes are blueprint of objects

// class student {
//     constructor(name, age, grade) {
//         this.name = name;
//         this.age = age;
//         this.grade = grade;

//     }
// }
// let s1 = new student("naveen", 22, "A");
// let s2 = new student("Arun" ,30,"b")
// console.log(s1.name);
// console.log(s2.name);

///inherit or extend (prototype inheritance )

// class person {
//     constructor(name, age, grade) {
//         this.name = name;
//         this.age = age;
//         this.grade = grade;

//     }
// }
// class student extends person{
//     constructor(name, age, grade, address) {
//         super(name, age, grade);
//         this.address=address
//     }
// }

// let s1 = new student("naveen", 25, "w", "ggbgbgb")
// console.log(s1.name);


// Multi dimensional Array

// let person = [
//   {
//     name: "Naveen",
//     age: 25,
//     city: function () {
//       return this.age - 2025;
//     },
//   },
//   {
//     name: "Naveen",
//     age: 25,
//     city: function () {
//       return this.age - 2025;
//     },
//   },
//   {
//     name: "Naveen",
//     age: 25,
//     city: function () {
//       return this.age - 2025;
//     },
//   },
// ];
// for (let p of person) {
//     console.log(p.name,":",p.city());
    
// }
// person.forEach(p => {
//     console.log(p.name);
    
// })









