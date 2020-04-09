///Looping triangles  
//Write a loop that makes seven calls to console.log to output the following triangle 
// “#”
// “##”
// “###”
// “####”
// “#####”
// “######”
// “#######”

let result = ""

for (let counter = 0; counter < 7; counter = counter + 1) {
console.log(result += "#"); 
}


//fizzBuzz 

const fizzBuzz = (arr) => {
  for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0) {
        console.log('fizzBuzz')
    }
    if(i % 3 === 0){
      console.log('Fizz')
    }
    if(i % 5 === 0){
      console.log('Buzz')
    }
  }
}
fizzBuzz()


//Chessboard //write a program that creates a string that represents a 8*8 grid, using newline characters to seperate lines. At each position of the grid their is either a space or '#'. The characters should form a Chessboard. Define a binding size = 8 When you have a program that generates this pattern change it so that it works for any size outputting a grid of the given width and height.  

let size = 8; 
let board = ""; //this is the empty string we're going to add either ' ' , '#' or newline

for (let i = 0; i < size; i++) {   /*in the outer loop we add newline to seperate rows*/
  for (let j = 0; j < size; j++) {/*every inner loop rappresents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
    if ((i + j) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);

//write a func min that takes two arguments and returns their minimum.  

const min = (a, b) => {
  return Math.min(10, 61 )
}

min() 

//Define a recursive function isEven the func should accept a single parameter(positive whole number) and return a boolean 

const isEven = (num) => {
  if(num < 0){
      return isEven(-num) 
  }
  else if(num == 1){
    return false 
  }
  else if(num == 0) {
    return true 
  }
  else{
    return isEven( num - 2)
  }
}
isEven(2)


//Bean Counting write a func countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string. 
  //Next write a func called countChar that behaves like countBs except it takes a second argument that indicates the character that is to be counted. Rewrite countBs to make use of this new function. 

  const countBs = (str) => {
    return countChar(str, 'B')
  }

  const countChar = (str, c) => {
    let count = 0; 
    for( let i = 0; i < str.length; i++){
        if(str.charAt(i) === c){
          count += 1; 
        }
    }
    return count 
  } 


console.log(countBs("BBbB"));


//write a func min that takes two arguments and returns their minimum.  

const min = (a, b) => {
  return Math.min(10, 61 )
}

min() 

//Define a recursive function isEven the func should accept a single parameter(positive whole number) and return a boolean 

const isEven = (num) => {
  if(num < 0){
      return isEven(-num) 
  }
  else if(num == 1){
    return false 
  }
  else if(num == 0) {
    return true 
  }
  else{
    return isEven( num - 2)
  }
}
isEven(2)


//Bean Counting write a func countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string. 
  //Next write a func called countChar that behaves like countBs except it takes a second argument that indicates the character that is to be counted. Rewrite countBs to make use of this new function. 

  const countBs = (str) => {
    return countChar(str, 'B')
  }

  const countChar = (str, c) => {
    let count = 0; 
    for( let i = 0; i < str.length; i++){
        if(str.charAt(i) === c){
          count += 1; 
        }
    }
    return count 
  } 



console.log(countBs("BBbB"));




