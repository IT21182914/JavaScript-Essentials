let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i,
  total = 0;

for (i = 0; i < numberArray.length; i++) {
  if (numberArray[i] % 2 === 0) {
    total = total + numberArray[i];
  } else {
    total = total - numberArray[i];
  }

}

console.log(total);
