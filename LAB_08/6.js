function calculateTotal() {
    let adultTickets = document.getElementById("adults").value;
    let childTickets = document.getElementById("children").value;
    adultTickets = Number(adultTickets);
    childTickets = Number(childTickets);
    const adultPrice = 10;
    const childPrice = 5;
    let total = (adultTickets * adultPrice) + (childTickets * childPrice);
    document.getElementById("totalAmount").value = `₹${total}`;
}
