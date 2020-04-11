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
