const ratePerHour = 45;
let hoursWorked = prompt("Enter the number of hours worked:");
hoursWorked = Number(hoursWorked);
let costOfMaterials = prompt("Enter the cost of materials (Rs):");
costOfMaterials = Number(costOfMaterials);
if (!isNaN(hoursWorked) && !isNaN(costOfMaterials) && hoursWorked > 0 && costOfMaterials >= 0) {
    let labourCost = ratePerHour * hoursWorked;
    let totalCharge = labourCost + costOfMaterials;
    alert(`Labour Cost: Rs.${labourCost.toFixed(2)}\nTotal Charge: Rs.${totalCharge.toFixed(2)}`);
} else {
    alert("Invalid input. Please enter valid numbers for hours worked and cost of materials.");
}
s