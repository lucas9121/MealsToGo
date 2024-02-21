const { mocks, addMockImage } = require("./mock");
module.exports.placesRequest = (request, response, client) => {
  const { location, mock } = request.query;
  if (mock === "true") {
    const data = mocks[location];
    if (data) data.results.map(addMockImage);
    return response.json(data);
  }
  client
    .placesNearby({
      params: {
        location,
        radius: 1500, //set in meters
        type: "restaurant",
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
