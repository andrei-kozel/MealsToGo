import { mocks } from "./mock";
import camelize from "camelize";

const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Not found");
    }
    resolve(mock);
  });
};

const restaurantsTransform = (result) => {
  return camelize(result);
};

restaurantsRequest()
  .then(restaurantsTransform)
  .then((result) => console.log(camelize(result)))
  .catch((err) => console.log("error:", err));
