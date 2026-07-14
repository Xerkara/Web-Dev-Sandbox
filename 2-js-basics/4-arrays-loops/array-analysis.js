const numbers = [4, 32, 76, 23, 54, 3, 89, 5, 67, 31];

function findMaximum(numberArray) {
    let maximumNumber = numberArray[0]; // Initialize with the first element
    for (const number of numberArray) {
        if (number > maximumNumber) {
            maximumNumber = number;
        }
    }
    return maximumNumber;
}

function findMinimum(numberArray) {
    let minimumNumber = numberArray[0]; // Initialize with the first element
    for (const number of numberArray) {
        if (number < minimumNumber) {
            minimumNumber = number;
        }
    }
    return minimumNumber;
}

function calculateSum(numberArray) {
    let sumOfNumbers = 0; // Reset the sum
    for (const number of numberArray) {
        sumOfNumbers += number;
    }
    return sumOfNumbers;
}

const max = findMaximum(numbers);
const min = findMinimum(numbers);
const sum = calculateSum(numbers);

console.log(`Maximum Number: ${max}`);
console.log(`Minimum Number: ${min}`);
console.log(`Sum of Numbers: ${sum}`);