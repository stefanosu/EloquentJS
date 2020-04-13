
///Flattening: Use the reduce method in combination with the concat method to "flatten" 
//an array of arrays into a single array that has all the eleements of the original arrays. 

  let arr = [[1,2,3], [4,5], [6]]
  console.log(arr.reduce((arr1, arr2) => arr1.concat(arr2)))


//Your own loop 

const loop = (val, test, update, body) => {
  for(let i = val; test(i); i = update(i)){
      body(i)
  }
}
loop(3, n => n > 0, n => n - 1, console.log);

