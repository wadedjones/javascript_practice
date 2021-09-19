const {shopForBeans, soakTheBeans, cookTheBeans} = require('./writing_async_functions');

async function makeBeans() {
    let type = await shopForBeans();
    let isSoft = await soakTheBeans(type);
    let dinner = await cookTheBeans(isSoft);
    console.log(dinner);
};
makeBeans();