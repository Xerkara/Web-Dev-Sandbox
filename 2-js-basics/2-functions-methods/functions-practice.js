/*
function sayHello() {
    console.log("Hello!");
}
*/
const sayHello = () => console.log("Hello!"); // Arrow function version

function checkName(name) {
    if (typeof name === "string") {
        return true;
    } else {
        console.error("Please provide a valid name.");
        return false;
    }
}

function introduceYourself(name) {
    if (checkName(name)) {
        console.log("Hi, my name is " + name + ".");
    }
}

function greetPerson(name, greeting = "Hello") {
    if (checkName(name)) {
        console.log(`${greeting}, ${name}!`);
    }
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

const sayGoodbye = () => console.log("Goodbye!");

setTimeout(() => sayGoodbye(), 5000);


// Test your functions here
sayHello();
introduceYourself("Sarah");
greetPerson(24);
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);