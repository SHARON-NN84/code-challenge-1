// This function calculates the boda boda fare based on the distance provided.
function calculateBodaFare(distanceInKm) {
    const baseFare = 50;         // Fixed base fare in KES
    const perKmCharge = 15;      // Charge per kilometer in KES

    // Calculate the distance-based charge
    const distanceFare = distanceInKm * perKmCharge;

    // Calculate the total fare
    const totalFare = baseFare + distanceFare;

    // Print the fare breakdown to the console
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceFare}`);
    console.log(`Total: KES ${totalFare}\n`);
    console.log("Panda Pikipiki!");
}

// Prompt the user to enter the trip distance in kilometers
const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");

// Convert the input string to a floating-point number
const distanceInKm = parseFloat(input);

// Validate the input to make sure it's a positive number
if (!isNaN(distanceInKm) && distanceInKm > 0) {
    calculateBodaFare(distanceInKm);
} else {
    console.log("Tafadhali weka umbali halali kwa kilomita.");
}
