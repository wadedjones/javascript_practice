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
console.log("This is the first line of code in app.js.");
function usingSTO() {
    console.log('This is delayed.');
};
setTimeout(usingSTO, 3000);
console.log("This is the last line of code in app.js.");