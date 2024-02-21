const { mocks, addMockImage } = require("./mock");

const addGoogleImage = (restaurant) => {
  if (!restaurant.photos) {
    restaurant = addMockImage;
    return restaurant;
  }
  const ref = restaurant.photos[0].photo_reference;
  if (!ref) {
    restaurant = addMockImage;
    return restaurant;
  }
  restaurant.photos = [
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${process.env.GOOGLE_MAPS_API_KEY}`,
  ];
  return restaurant;
};

module.exports.placesRequest = (request, response, client) => {
  const { location, mock } = request.query;
  if (mock === "true") {
    const data = mocks[location];
    if (data) data.results = data.results.map(addMockImage);
    return response.json(data);
  }
  client
    .placesNearby({
      params: {
        location,
        radius: 1500, //set in meters
        type: "restaurant",
        key: process.env.GOOGLE_MAPS_API_KEY,
        fields: "photos",
      },
      timeout: 1000,
    })
    .then((res) => {
      res.data.results = res.data.results.map(addGoogleImage);
      return response.json(res.data);
    })
    .catch((e) => {
      console.error(e.response.data.error_message);
      response.status(400).send(e.response.data.error_message);
    });
};
