// tantangan coding 4/365
// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed
// https://github.com/stevenlauwira/tantangan-coding-harian

// function replace(s){
//     //coding and coding....
//     let result = '';
//     for (let i = 0; i < s.length; i++){
//         if ('aeiouAEIOU'.includes(s[i])) {
//             result = result + '!';
//         } else {
//             result = result + s[i];
//         }
//     }
//     return result;
//   }

function replace(s){
    return s.replace(/[aeiouAEIOU]/g,'!')    
    
  }