// This function estimates the transaction fee based on a 1.5% charge,
// with a minimum of KES 10 and a maximum of KES 70.
function estimateTransactionFee(amountToSend) {
    const feeRate = 0.015; // 1.5% fee
    const minFee = 10;
    const maxFee = 70;

    // Calculate the initial fee based on 1.5% of the amount
    let calculatedFee = amountToSend * feeRate;

    // Apply minimum and maximum fee limits
    if (calculatedFee < minFee) {
        calculatedFee = minFee;
    } else if (calculatedFee > maxFee) {
        calculatedFee = maxFee;
    }

    // Calculate the total amount to be debited
    const totalDebited = amountToSend + calculatedFee;

    // Print results to the console
    console.log(`Unatuma: KES ${amountToSend}`);
    console.log(`Ada ya muamala (1.5%): KES ${calculatedFee}`);
    console.log(`Jumla inayokatwa: KES ${totalDebited}`);
    console.log("send money securely!")
}

// Prompt the user to enter the amount to send
const input = prompt("Unatuma Ngapi? (KES):");
const amountToSend = parseFloat(input); // Convert input to number

// Validate input before calculating the fee
if (!isNaN(amountToSend) && amountToSend > 0) {
    estimateTransactionFee(amountToSend);
} else {
    console.log("Tafadhali weka kiasi halali cha kutuma.");
}
