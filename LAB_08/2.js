let age = prompt("Enter your age:");
if (age !== null) {
    age = Number(age); 
    if (!isNaN(age) && age >= 18) {
        alert("You are eligible to drive.");
    } else if (!isNaN(age)) {
        alert("You are not eligible to drive.");
    } else {
        alert("Invalid input. Please enter a valid number.");
    }
}
