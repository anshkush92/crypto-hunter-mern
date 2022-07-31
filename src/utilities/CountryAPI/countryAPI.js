// Data consists of Name, Flag, currency
const countriesData = async () => {
    const requestUrl = "https://restcountries.com/v3.1/all";
    const response = await fetch(requestUrl);
    const data = await response.json();
    const countryData = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].currencies !== undefined) {
            const label = Object.keys(data[i].currencies)[0];
            const symbol = data[i].currencies[label].symbol;
            countryData.push({ name: data[i].name.common, flag: data[i].flags.svg, label, symbol })
        }
    }

    return countryData;
}

// For now exporting all the data
export default countriesData;