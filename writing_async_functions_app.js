const {shopForBeans, soakTheBeans, cookTheBeans, cookBeanSouffle} = require('./writing_async_functions');

async function makeBeans() {
    let type = await shopForBeans();
    let isSoft = await soakTheBeans(type);
    let dinner = await cookTheBeans(isSoft);
    console.log(dinner);
};
// makeBeans();

async function hostDinnerParty() {
    try {
        let dinner = await cookBeanSouffle();
        console.log(`${dinner} is served!`)
    } catch(error) {
        console.log(error);
        console.log('Ordering a pizza!');
    };
};

hostDinnerParty();