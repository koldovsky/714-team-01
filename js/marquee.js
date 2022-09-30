(function() {

    let rate = 1;
    let currencies;
    document.querySelector('.convertButton').addEventListener('click', convertCurrency);

    async function convertCurrency() {
        const convertTo = document.querySelector('.carrVal').value;
        if(!currencies) {
            const response = await fetch('https://v6.exchangerate-api.com/v6/f6f2cb865a487f257bfa2860/latest/USD');
            currencies = await response.json();
        }        
        rate = currencies.conversion_rates[convertTo];
    }
    convertCurrency();



} )();