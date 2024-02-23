function calculateMoney(ticketSale) {
    if (ticketSale >= 0) {
        const ticketPrice = 120;
        const totalCost = 500 + (8 * 50);
        const totalEarn = ticketSale * ticketPrice;
        const actualEarn = totalEarn - totalCost;
        return actualEarn;
    } else {
        return 'Invalid Number';
    }
}

const ticketSale = 130;
const totalVisitor = ticketSale >= 0 ? calculateMoney(ticketSale) : 'Invalid Number';
console.log(totalVisitor);
