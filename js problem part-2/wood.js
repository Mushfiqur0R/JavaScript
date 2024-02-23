/**
 * chair --> 3 cft
 * table --> 3 cft
 * bed --> 50 cft
 */

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood =  chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}

const wood = woodQuantity(1, 1, 1);
console.log('WOOD NEEDED', wood);

/**
 * shirt price --> 500
 * pant price --> 300
 * shoe price --> 900
 */

function clothPrice(shirtPrice, pantPrice, shoePrice){
    const perShirt = 500;
    const perPant = 300;
    const perShoe = 900;

    const shirtTotalPrice = shirtPrice * perShirt;
    const pantTotalPrice = pantPrice * perPant;
    const shoeTotalPrice = shoePrice * perShoe;

    const totalPrice =  shirtTotalPrice + pantTotalPrice + shoeTotalPrice;
    return totalPrice;
}

const price = clothPrice(1, 1, 1);
console.log('Total Cloth Price:', price);
