/**
 * Problem:
 * Write a function that prints the Fibonacci sequence up to a given number of terms.
 *
 * Your task:
 * Implement the function `fibonacci` that returns an array of Fibonacci numbers up to the specified count.
 *
 * Example:
 * fibonacci(5) should return [0, 1, 1, 2, 3].
 * fibonacci(3) should return [0, 1, 1].
 */

// Write your solution here
function fibonacci(numbers){
   if(numbers <= 0){
    return [];
   }else{
   let fibo = [0 , 1]
   for(let i=2 ; i < numbers; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
   }
   return fibo.slice(0, numbers)
}
}





module.exports = fibonacci;
