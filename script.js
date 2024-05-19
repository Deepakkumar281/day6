// Step 01: Create a XHR object
var request = new XMLHttpRequest();

// Step 02: Open a request
request.open("GET", "https://restcountries.com/v3.1/all");

request.send();


request.onload = function() {

    var res = JSON.parse(request.response);
    console.log(res);

    // 1. Get all the countries from Asia continent/region using filter method
    var asianCountries = res.filter(country => country.region === "Asia");
    console.log("Asian Countries:", asianCountries);
    console.log("Asian Countries name:", asianCountries.map(country => country.name.common));

    // 2. Get all the countries with a population of less than 200,000 using filter method
    var smallPopulationCountries = res.filter(country => country.population < 200000);
    console.log("Countries with population less than 200,000:", smallPopulationCountries);
    console.log("Countries with population less than 200,000 name:", smallPopulationCountries.map(country => country.name.common));

    // 3. Print the following details name, capital, flag using forEach method
    res.forEach(country => {
        console.log(`Name: ${country.name.common}, Capital: ${(country.capital)}, Flag: ${country.flags.svg}`);
    });

    // 4. Print the total population of countries using reduce method
    var totalPopulation = res.reduce((total, country) => total + country.population, 0);
    console.log("Total Population:", totalPopulation);

    // 5. Print the countries that use US dollars as currency
    var usdCountries = res.filter(country => country.currencies && country.currencies.USD);
    console.log("Countries using USD as currency:", usdCountries);
};
