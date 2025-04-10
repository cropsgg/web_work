let isStudent = confirm("Are you a student? Click OK for Yes, Cancel for No.");
if (isStudent) {
    let regNumber = prompt("Enter your registration number:");
    if (regNumber !== null && regNumber.trim() !== "") {
        alert(`Thank you! Your registration number is: ${regNumber}`);
    } else {
        alert("Invalid input. Please enter a valid registration number.");
    }
} else {
    alert("You must be a student to enter a registration number.");
}
