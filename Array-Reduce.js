//array.reduce () reduce an array to a single value
// array example - ecom shopping cart w multiple item prices, at checkout all items get grouped into one item (one total price)


let prices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = prices.reduce(checkOut);

//template literal - use backticks
console.log('The total is: $${total}');

// 2 paramaters - total and element
function checkout(total, element) {
    return total + element;
}




