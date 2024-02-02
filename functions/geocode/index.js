const { locations: locationsMock } = require("./geocode.mock");

module.exports.geocodeRequest = (request, response) => {
  const { city } = request.query;
  const locationMock = locationsMock[city.toLowerCase()];
  response.json(locationMock);
};
