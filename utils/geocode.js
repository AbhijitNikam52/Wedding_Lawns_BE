const axios = require("axios");

/**
 * Converts a full address string into lat/lng coordinates
 * using Google Geocoding API (server-side call — key stays secret).
 *
 * @param {string} address — e.g. "123 MG Road, Pune 411001"
 * @returns {{ lat: number, lng: number, formattedAddress: string } | null}
 */
const geocodeAddress = async (address) => {
    try {
        const apiKey = process.env.GOOGLE_MAPS_API_KEY;
        if (!apiKey) {
            console.warn("GOOGLE_MAPS_API_KEY not set — skipping geocode");
            return null;
        }

        const url = "https://maps.googleapis.com/maps/api/geocode/json";
        const response = await axios.get(url, {
            params: {
                address: address,
                key: apiKey,
                region: "in", // bias results toward India
            },
        });

        const data = response.data;

        if (data.status !== "OK" || !data.results.length) {
            console.warn(`Geocoding failed: ${data.status} for address: ${address}`);
            return null;
        }

        const result = data.results[0];
        const location = result.geometry.location;

        return {
            lat: location.lat,
            lng: location.lng,
            formattedAddress: result.formatted_address,
        };
    } catch (error) {
        console.error("Geocoding error:", error.message);
        return null;
    }
};

module.exports = geocodeAddress;