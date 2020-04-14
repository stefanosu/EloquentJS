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

