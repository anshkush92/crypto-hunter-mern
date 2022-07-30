// Data consists of Name, Flag, currency
const countriesData = async () => {
    const requestUrl = "https://restcountries.com/v3.1/all";
    const response = await fetch(requestUrl);
    const data = await response.json();
    const countryData = [];

    data.map((country) => countryData.push({ name: country.name.common, flag: country.flags.svg, currency: country.currencies }))

    for (const country of countryData) {
        for (const data in country) {
            if (data === "currency" && country[data]) {
                const key = Object.keys(country[data])[0];
                country[data] = key;
            }
        }
    }
    return countryData;
}

// For now exporting all the data
export default countriesData;