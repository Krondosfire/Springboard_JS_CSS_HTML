window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

function hasEnoughFundsToBuy(price, qty, balance) {
    const subtotal = price * qty;
    if(subtotal <= balance) {
        return 'You have enough funds to buy this item.';
    }
    return 'Sorry! You do not have enough funds to buy this item.';
};

console.log(`price = 10, qty = 2, balance = 25: ${hasEnoughFundsToBuy(10, 2, 25)}`); // You have enough funds to buy this item.
console.log(`price = 10, qty = 3, balance = 25: ${hasEnoughFundsToBuy(10, 3, 25)}`); // Sorry! You do not have enough funds to buy this item.


let grades = [99,98,76,54,66,90,81,59];
let sum = 0;
for (let i = 0; i < grades.length; i++){
    
    sum += grades[i];
    console.log(`i : ${i}`);
    console.log(`grades[i] : ${grades[i]}`);
    console.log(`sum : ${sum}`);
}
let average = sum / grades.length;
console.log(`The average of the grades is: ${average}`); // The average of the grades is: 77.875

