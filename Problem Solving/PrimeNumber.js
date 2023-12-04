/*

1.a prime number is a number that is divisible only by 1 and itself.
 For example, 2, 3, 5, 7, 11, and 13 are prime numbers because they cannot be evenly divided 
by any other numbers except 1 and the number itself.


Question:create a JavaScript function called isPrime that takes
an integer as an argument and returns true if it's a prime number and false otherwise.

*/

function isPrimeWithoutSqrt(number) {
  if (number <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false; // If the number is divisible by any other number, it's not prime
    }
  }

  return true; // If no divisors were found, the number is prime
}

// Test the function with the number 7
console.log(isPrimeWithoutSqrt(7)); // Should return true
