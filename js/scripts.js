// // fibonacciNumGen Non-recursively
// function fibonacciNumGen(num) {
//   var sequence = [1,1];
//   if (num === 0 || num === 1) {
//     return 0;
//   }
//   else if (num === 2 || num === 3) {
//     return 1;
//   } 
//   else {
//     for (var i = 1; i < (num - 2); i++) {
//       var fibonacciNextNum = ((sequence[i]) + (sequence[i-1]))
//       sequence.push(fibonacciNextNum);
//       console.log(sequence);
//       console.log(fibonacciNextNum);
//     }; 
//   };
//   return fibonacciNextNum;
// };

//fibonacciNumGen Recursively
// function fibonacciNumGen(num) {
//   var sequence = [1,1,3];
//   var count = 10;
//   if (sequence[count] < num) {
//       var fibonacciNextNum = (fibonacciNumGen(sequence[count]) + fibonacciNumGen(sequence[count-1]));
//       count++;
//       sequence.push(fibonacciNextNum);
//       console.log(count);
//       console.log(fibonacciNextNum);
//       console.log(sequence);
//   } else if (num === 0 || num === 1) {
//     return 0;
//   } else {
//     return 1;
//     console.log(sequence);
//   };
//   return fibonacciNextNum;
//  };

//bottlesOfFibonacci Recursively
 var bottlesOfFibonacci = function(number){
  if (number === 0 || number === 1) {
    return 0;
  }
  else if (number === 2 || number === 3) {
    return 1;
  } else {
    return bottlesOfFibonacci(number-1) + bottlesOfFibonacci(number-2);
    };
  };
