//write a class vec that represents a vector in two dimensional space. It takes two parameters(x, y) 
//which should save to properties of the same name. //Give the vec prototype two methods, plus and minus that 
//take another vector as a parameter and return a new vector that has the sum or difference of the two vectors
//(this and parameter)x and y values /Add a getter property length to the prototype that computes the length of 
//the vector—that is, the distance of the point (x, y) from the origin (0, 0).

class Vec {
  constructor(x, y){
    this.x = x 
    this.y = y
  }  
}

Vec.prototype.plus = function(vec) {
  return new Vector(this.x + vec.x, this.y + vec.y)
}

Vec.prototype.minus = function(vec) {
  return new Vec(this.x - vec.x, this.y - vec.y)
}
Object.defineProperty(Vec.prototype, 'length', {
  get: function() {
    return (Math.sqrt((this.x * this.y) + (this.x * this.y)))
  }
})

  let myVector = new Vec (5, 6);
	console.log(myVector.length); // 5
	let newVector = myVector.minus(myVector)
	console.log(newVector.length); // 


  //Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.

//Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

class Group {
  constructor() {
    this.data = [];
  }
  add(value) {
    if (!this.has(value)) {
      this.data.push(value);
    }
  }
  has(value) {
    return this.data.includes(value);
  }
  delete(value) {
    let index = this.data.indexOf(value);
    if (index != -1) {
      this.data.splice(index, 1);
    }
  }
  static from(iterable) {
    let group = new Group();
    for (let value of iterable) {
      group.add(value);
    }
    return group;
  }
  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.index = 0;
  }
  next() {
    if (this.index == this.group.data.length) return { done: true };
    let value = this.group.data[this.index];
    this.index++;
    return { value, done: false };
  }
}

let group = Group.from([20, 30]);
console.log(group.has(20)); // → true
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10))

//Borrowing a method:

let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(Object.prototype.hasOwnProperty.call(map,"one"));
// → true
