function fetchData(event) {
    event.preventDefault();
    let country = CountryInp.value;
    

    fetch(`https://restcountries.com/v2/name/${country}?fullText=true`)
        .then((res) => res.json())//data from api
        .then((data) => populationData(data))//data from json
        .catch(err => alert(err))

}

function populationData(countryName) {
    console.log(countryName);
    let cap = countryName[0].capital;
    let countname = countryName[0].name;
    let currencyName = countryName[0].currencies[0].code;
    let currencySymbol = countryName[0].currencies[0].symbol;
    let language = countryName[0].languages[0].name;
    let population = countryName[0].population;
    document.getElementById("CountName").innerHTML = countname;
    document.getElementById("CurrencyName").innerHTML = currencyName;
    document.getElementById("CurrencySymbols").innerHTML = currencySymbol;
    document.getElementById("Population").innerHTML = population;
    document.getElementById("capital").innerHTML = cap;
    document.getElementById("language").innerHTML = language;
    var flagimage= document.getElementById("flagim");
    flagimage.src=countryName[0].flag;
}