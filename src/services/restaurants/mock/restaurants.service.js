import { mocks } from "."; //pulling from index
import camelize from "camelize"; // camelcase seperate words. Adds consistency from API being returned.
export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) reject("not found");
    resolve(mock);
  });
};

const restaurantsTransform = (result) => {
  const newResult = camelize(result);
  return newResult;
};
restaurantsRequest()
  .then(restaurantsTransform)
  .then((transformedResponse) => {
    console.log(camelize(transformedResponse));
    console.log("it worked!!!");
  })
  .catch((err) => {
    console.error(err);
  });
