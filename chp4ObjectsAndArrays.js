///Write a range func that takes two arguments start and end and returns an arr containing all the numbers from start up to (and including )end. 

let array = [];

const range = (arr) => {  
    var lower = Math.min(arr[0],arr[1]);    
    var upper = Math.max(arr[0],arr[1]);  

    for (var i=lower;i<=upper;i++){  
        array.push(i);  
    }
    return array; // return the array to be used in the sum function
}  

const sum = (array) => {  
    var total = 0; // need to create a variable outside the loop scope
    for(var i in array){  
      total = total+array[i];  
    }
    return total;
}  

console.log(sum(range([1,10]))); // pass the array correctly 


// Reversing an array 
const reverseArray = (array) => {
  let result = [];
  for (let item of array) {
    result.unshift(item);
  }
  return result;
}

const reverseArrayInPlace = (array) => {
  let len = array.length;
  for (let i = 0; i < Math.floor(len/2); i++) {
    console.log(i, len-i-1, array[i], array[len-i-1], array);
    let swap = array[i];
    array[i] = array[len-i-1];
    array[len-i-1] = swap;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);

let arrayValue2 = [1, 2, 3, 4];
reverseArrayInPlace(arrayValue2);
console.log(arrayValue2);


function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

//Deep comparison 

function deepEqual(a, b) {
  if (a === b) {
    // items are identical
    return true;
  } else if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
  	// items are objects - do a deep property value compare
    // join keys from both objects together in one array
    let keys = Object.keys(a).concat(Object.keys(b));
    // filter out duplicate keys
    keys = keys.filter(
      function (value, index, self) { 
        return self.indexOf(value) === index;
	  }
    );
    for (p of keys) {
      if (typeof a[p] === 'object' && typeof b[p] === 'object') {
        if (deepEqual(a[p], b[p]) === false) {
          return false;
        }
      } else if (a[p] !== b[p]) {
        return false;
      }
    }
    return true;
  } else {
   return false; 
  }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));