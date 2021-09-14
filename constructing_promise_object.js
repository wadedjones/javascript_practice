// practicing promise objects
/*
const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};

const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
        resolve('Sunglasses order processed.')
    } else {
        reject('That item is sold out.')
    };
}
function orderSunglasses() {
    return new Promise(myExecutor);
};
const orderPromise = orderSunglasses();
console.log(orderPromise);
*/

// This is practicing setting the timeout
/*
console.log("This is the first line of code in app.js.");
function usingSTO() {
    console.log('This is delayed.');
};
setTimeout(usingSTO, 3000);
console.log("This is the last line of code in app.js.");
*/
// initial sunglasses set to 1900, changed to 0 for catch() practice
const inventory = {
    sunglasses: 0,
    pants: 1088,
    bags: 1344
};

const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let inStock = order.every(item => inventory[item[0]] >= item[1]);
            if (inStock) {
                resolve(`Thank you. your order was successful.`);
            } else {
                reject(`We're sorry. Your order could not be completed because some items are sold out.`);
            }
        }, 1000);
    })
};
const order = [['sunglasses', 1], ['bags', 2]];

function handleSuccess(resolvedValue) {
    console.log(resolvedValue);
}
function handleFailure(rejectedValue) {
    console.log(rejectedValue);
};
// added catch after then practice
checkInventory(order).then(handleSuccess).catch(handleFailure);