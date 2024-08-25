const ExpressError = require("./ErrorHandler");
const baseUrl = `https://geocode.search.hereapi.com/v1`;
const apiKey = `1sNk2GhQwQ0VdXP5f_O6BgM3eHbnDVFU-S3s-MmXBh4`;

const geocode = async (address) => {
    const url = `${baseUrl}/geocode?q=${address}&apiKey=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const lat = data.items[0].position.lat;
        const lng = data.items[0].position.lng;
        return { lat, lng };
    } catch (err) {
        new ExpressError(err.message, 500);
    }
};

module.exports.geometry = async (address) => {
    try {
        const position = await geocode(address);
        return {
            type: "Point",
            coordinates: [position.lng, position.lat],
        };
    } catch (err) {
        new ExpressError(err.message, 500);
    }
};
