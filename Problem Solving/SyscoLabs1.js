let numberArray = [80, 30, 30];

let i,
  total = 0;

for (i = 0; i < numberArray.length; i++) {
  if (i % 2 === 0) {
    total += numberArray[i];
  } else {
    total -= numberArray[i];
  }
}

console.log(total);
