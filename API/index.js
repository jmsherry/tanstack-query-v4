import { CARS_ENDPOINT } from "../src/settings";
import axios from "axios";
import { sleep } from "../src/utils";

export const fetchCars = async () => {
  // const response = await axios(CARS_ENDPOINT);
  const response = await axios(CARS_ENDPOINT.slice(0, -3));
  console.log("start blocking");
  sleep();
  console.log("end blocking");
  return response.data;
};

export const fetchCar = async (id) => {
  const response = await axios(`${CARS_ENDPOINT}${id}`);
  return response.data;
};

export const addCar = async (data) => {
  console.log("about to add", data);
  const response = await axios({
    method: "POST",
    url: CARS_ENDPOINT,
    data,
  });
  return response.data;
};

export const updateCar = async ({ id, data }) => {
  console.log("in api", id, data);
  const response = await axios({
    url: `${CARS_ENDPOINT}${id}`,
    method: "PUT",
    data,
  });
  return response.data;
};

export const deleteCar = async (id) => {
  return await axios({
    method: "DELETE",
    url: `${CARS_ENDPOINT}${id}`,
  });
};
