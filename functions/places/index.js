const { mocks, addMockImage } = require("./mock");
module.exports.placesRequest = (req, res) => {
  const { location } = req.query;
  const data = mocks[location];
  if (data) data.results.map(addMockImage);
  res.json(data);
};
