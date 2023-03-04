//Week 3

/*1a
const ages = [3, 9, 23, 64, 2, 8, 28, 93];
const ageDifference = ages[ages.length - 1] - ages[0];
console.log(ageDifference); 
ages.lenght is subtracting 



/*1b
const ages = [3, 9, 23, 64, 2, 8, 28, 93];
let newAge = 50;
ages.push(newAge);
console.log(ages);
ages.push is a method to add new element to the array

/*1c
let ages = [3, 9,23, 64, 2, 8, 28, 93]; 
let totalAge = 0;
let count = 0;

for (let i = 0; i < ages.length; i++) {
  totalAge += ages[i];
  count++;
}

let averageAge = totalAge / count;
console.log(averageAge);

1d
names = ["sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

let concatenatedNames = "";
for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i] + " ";
}

console.log(concatenatedNames);

2. 
const myArray = [1, 2, 3, 4, 5];
const lastElement = myArray[myArray.length - 1];
console.log(lastElement);



3. 
const myArray = [1, 2, 3, 4, 5];
const firstElement = myArray[0];
console.log(firstElement);

4.
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
const nameLengths = [];

for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}

console.log(nameLengths);
4b.
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let sum = 0;

for (let i = 0; i < names.length; i++) {
  sum += names[i].length;
}

console.log(sum);
5.
function repeatWord(word, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += word;
  }
  return result;
}
const repeatedWord = repeatWord("Hello", 3);
console.log(repeatedWord);


6. 
function repeatWord(word, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += word;
  }
  return result;
}
const repeatedWord = repeatWord("Hello", 3);
console.log(repeatedWord);

7.
function isSumGreaterThan100(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum > 100;
}
const numbers = [10, 20, 30, 40];
const isGreaterThan100 = isSumGreaterThan100(numbers);
console.log(isGreaterThan100);

8.
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

const numbers = [10, 20, 30, 40];
const average = calculateAverage(numbers);
console.log(average);

9.
function compareAverages(arr1, arr2) {
  
  const avg1 = arr1.reduce((acc, val) => acc + val, 0) / arr1.length;
  const avg2 = arr2.reduce((acc, val) => acc + val, 0) / arr2.length;
  
 
  const result = avg1 > avg2;
  return result;
}


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const result = compareAverages(arr1, arr2);
console.log(result); 

10.
function willBuyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside && moneyInPocket > 10.50) {
    return true;
  } else {
    return false;
  }
}

const isHotOutside = true;
const moneyInPocket = 15.0;
const result = willBuyDrink(isHotOutside, moneyInPocket);
console.log(result);

11.
function findMaxNumber(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}


const numbers = [4, 7, 1, 9, 3];
const maxNumber = findMaxNumber(numbers);
console.log(maxNumber); //