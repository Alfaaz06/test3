const fetch = require('node-fetch');

exports.getAllData = async(req, res) => {
    let data = await fetch('https://restcountries.com/v2/all');
    data = await data.json();

    const data_sample = [];

    data && data.map(item => {
        data_sample.push({
            name: item.name,
            nativeName: item.nativeName,
            capital: item.capital,
            population: item.population,
            flag: item.flag,
            currency: item.currencies,
            symbol: item.currencies
        });
    })

    res.status(200).json({
        success: true,
        data_sample
    });
}