async function getCats() {
    const axios = require('axios');
    var result;

    await axios
        .get('https://cat-fact.herokuapp.com/facts')
        .then((response) => {
            return response;
        })
        .then((cats) => {
            result = cats.data;
        })
        .catch((err) => {
            result = err;
            console.log('ERROR 2');
            console.log(err);
        });
    return result;
}

async function analyseCats(cats) {
    console.log('Analysing kitties...')
    for (var singleCat in cats) {
        console.log(cats[singleCat].text)
    }
}

module.exports = {
    getCats,
    analyseCats
}