const bottle = {
  color: 'yellow',
  price: 50,
  isClean: true,
  capacity: 1,
};
//objects are consists of keys and values

const keys = Object.keys(bottle);
//Object.keys() method returns the names of the enumerable string properties and methods of an object.
const values = Object.values(bottle);
//Returns an array of values of the enumerable properties of an object.
// console.log(keys, values);
const pair = Object.entries(bottle);
//returns the array of key/values of the enumerable properties of an object.
// console.log(pair);

//we can delete object properties and values by using delete keyword;
console.log(bottle);
//object.seal() will not permit you to delete but you can modify any property value:
Object.seal(bottle);
delete bottle.isClean;
bottle.price = 100;
console.log(bottle);
//so here we changed price after seal method is applied.

//Object.freeze()
Object.freeze(bottle);
delete bottle.color;
bottle.capacity = 2;
console.log(bottle);
//here we see that we cannot modify or delete any property of the objject.
