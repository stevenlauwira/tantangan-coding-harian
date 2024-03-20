// tantangan coding 1/365
// https://www.codewars.com/kata/56576f82ab83ee8268000059
// https://github.com/stevenlauwira/tantangan-coding-harian

// function spacey(array) {
//     for(let i=1; i<array.length;i++)
//     array[i]= array[i-1]+array[i]
//     return array
//   }

const spacey= (array)=> array.map((_, index)=> array.slice(0,index+1).join(''))
  
console.log(spacey(['this', 'cheese', 'has', 'no', 'holes']));