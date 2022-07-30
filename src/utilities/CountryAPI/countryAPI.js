// Data consists of Name, Flag, currency
const countriesData = async () => {
    const requestUrl = "https://restcountries.com/v3.1/all";
    const response = await fetch(requestUrl);
    const data = await response.json();
    const countryData = [];

    for (let i = 0; i < data.length; i++) {
        console.log(i, data[i].currencies);
        if (data[i].currencies !== undefined) {
            const label = Object.keys(data[i].currencies)[0];
            console.log(label, Object.keys(data[i].currencies));
            countryData.push({ name: data[i].name.common, flag: data[i].flags.svg, label })
        }
    }

    console.log(countryData);

    return countryData;
}

// For now exporting all the data
export default countriesData;