const { locations: locationsMock } = require("./geocode.mock");

module.exports.geocodeRequest = (request, response, client) => {
  const { city, mock } = request.query;
  if (mock === "true") {
    const locationMock = locationsMock[city.toLowerCase()];
    return response.json(locationMock);
  }
  client
    .geocode({
      params: {
        address: city,
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
      timeout: 1000,
    })
    .then((res) => {
      return response.json(res.data);
    })
    .catch((e) => {
      console.error(e.response.data.error_message);
      response.status(400).send(e.response.data.error_message);
    });
};
