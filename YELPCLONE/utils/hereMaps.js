const ExpressError = require("./ErrorHandler");
const baseUrl = `https://geocode.search.hereapi.com/v1`;
const apiKey = `1sNk2GhQwQ0VdXP5f_O6BgM3eHbnDVFU-S3s-MmXBh4`;

module.exports.geocode = async (address) => {
    const url = `${baseUrl}/geocode?q=${address}&limit=1&apiKey=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.items[0].position;
    } catch (error) {
        throw new ExpressError(error.message, 500);
    }
};
