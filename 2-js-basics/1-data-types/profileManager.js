// Create the user profile object
let profile = {
    name: "John Doe",
    age: 25,
    isStudent: true,
    favoriteColors: ["blue", "green", "red"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345"
    }
};

// Function to display the profile information
function displayProfile() {
    // Using template literals
    console.log(`Name: ${profile.name}`);
    console.log(`Age: ${profile.age}`);
    // Arithmetic operation with age
    console.log(`Age next year: ${profile.age + 1}`);
    // Boolean logic for student status
    console.log(`Is student: ${profile.isStudent ? 'Yes' : 'No'}`);
    // String concatenation for address
    console.log("Address: " + profile.address.street + ", " + profile.address.city + ", " + profile.address.zipCode);
    // Favorite colors
    console.log(`Favorite colors: ${profile.favoriteColors.join(', ')}`);
}

// Function to update individual fields
function updateField(field, value) {
    if (profile.hasOwnProperty(field)) {
        profile[field] = value;
    } else if (field === 'street' || field === 'city' || field === 'zipCode') {
        profile.address[field] = value;
    }
}

/* html part for displaying the profile in a web page
function print_r(o) {
  return JSON.stringify(o,null,'\t').replace(/\n/g,'<br>').replace(/\t/g,'&nbsp;&nbsp;&nbsp;'); 
}
let putHere = document.getElementById("#put-here");
putHere.innerHTML = print_r(profile);
*/

// Demonstrate the functions
displayProfile();
console.log('--- Updating age to 26 and isStudent to false ---');
updateField('age', 26);
updateField('isStudent', false);
displayProfile();

console.table(profile);
