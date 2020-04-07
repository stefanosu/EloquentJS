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
