const transactionCharge = 2.5/100;
//This is the percentage that determines the transaction charge
let amountTendered = 100000;
console.log("This is what the billed amount is (less transaction charges);");
console.log (amountTendered-transactionCharge*amountTendered);
