let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
num1 = Number(num1);
num2 = Number(num2);
if (!isNaN(num1) && !isNaN(num2)) {
    let operation = prompt("Choose an operation: +, -, *, /, %");
    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            alert(`Result: ${num1} + ${num2} = ${result}`);
            break;
        case "-":
            result = num1 - num2;
            alert(`Result: ${num1} - ${num2} = ${result}`);
            break;
        case "*":
            result = num1 * num2;
            alert(`Result: ${num1} * ${num2} = ${result}`);
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
                alert(`Result: ${num1} / ${num2} = ${result}`);
            } else {
                alert("Error: Division by zero is not allowed.");
            }
            break;
        case "%":
            if (num2 !== 0) {
                result = num1 % num2;
                alert(`Result: ${num1} % ${num2} = ${result}`);
            } else {
                alert("Error: Modulo by zero is not allowed.");
            }
            break;
        default:
            alert("Invalid operation. Please choose +, -, *, /, or %.");
    }
} else {
    alert("Invalid input. Please enter valid numbers.");
}
