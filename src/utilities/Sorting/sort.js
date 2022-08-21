// Sort the coins according to the RANK (ASCENDING ORDER) -------> Makes the change in SAME ARRAY
export const compareRank = (a, b) => {
    console.log("Compare Rank");
    if (a.market_cap_rank < b.market_cap_rank) {
        return -1;
    } else if (a.market_cap_rank > b.market_cap_rank) {
        return 1;
    } else {
        return 0;
    }
}

// Sort the coins according to the NAME (ASCENDING ORDER) ------> Makes the change in SAME ARRAY
export const compareCoin = (a, b) => {
    console.log("Compare Coin")
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
    } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
    } else {
        return 0;
    }
}

// Sort the coins according to the PRICE (ASCENDING ORDER) ------> Makes the change in SAME ARRAY
export const comparePrice = (a, b) => {
    console.log("Compare Price")
    if (a.current_price < b.current_price) {
        return -1;
    } else if (a.current_price > b.current_price) {
        return 1;
    } else {
        return 0;
    }
}

// Sort the coins according to the PRICE (ASCENDING ORDER) ------> Makes the change in SAME ARRAY
export const compare24hrChange = (a, b) => {
    console.log("Compare 24hr Change")
    if (a.price_change_percentage_24h < b.price_change_percentage_24h) {
        return -1;
    } else if (a.price_change_percentage_24h > b.price_change_percentage_24h) {
        return 1;
    } else {
        return 0;
    }
}

// Sort the coins according to the PRICE (ASCENDING ORDER) ------> Makes the change in SAME ARRAY
export const compareMarketCap = (a, b) => {
    console.log("Compare Market Cap")
    if (a.market_cap < b.market_cap) {
        return -1;
    } else if (a.market_cap > b.market_cap) {
        return 1;
    } else {
        return 0;
    }
}