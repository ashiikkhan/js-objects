//create object using object literals:
const musician = {};
musician.name = 'MD. ASHIKUR RAHMAN';
musician.speciality = 'Guitar Player';
musician.play = function () {
  console.log('start to play your guitar');
};

// console.log(musician);
//{ name: 'MD. ASHIKUR RAHMAN', speciality: 'Guitar Player' }

//object constructor:
const person = new Object();
// console.log(person);

//Object.create() method:
const item = Object.create(musician);
// console.log(item);
//{}
// console.log(item.name);
// MD. ASHIKUR RAHMAN

//ES6 Classes:
class Person {
  name = 'Ashik';
  age;
  job;
  address = {
    area: 'Sonali R/A, Notun Bazar',
    district: 'Sylhet',
  };
  constructor(age, job) {
    this.age = age;
    this.job = job;
  }
}

const person1 = new Person(26, 'Web Developer');
// console.log(person1);

//Constructor function :
function Car(model, price) {
  this.model = model;
  this.price = price;
}
const tesla = new Car('eloion', 50000);
console.log(tesla);
