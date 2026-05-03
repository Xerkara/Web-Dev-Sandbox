/*
function sayHello() {
    console.log("Hello!");
}
*/
const sayHello = () => console.log("Hello!"); // Arrow function version

function introduceYourself(name) {
    console.log("Hi, my name is " + name + ".");
}

function greetPerson(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}

function addNumbers(num1, num2) {
    return num1 + num2;
}

/*
function createFullName(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    return fullName;
}
*/
const createFullName = (firstName, lastName) => `${firstName} ${lastName}`; // Arrow function version

function calculateTip(billAmount, tipPercentage = 15) {
    const tipAmount = billAmount * (tipPercentage / 100);
    return tipAmount;
}

// Test your functions here
sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);