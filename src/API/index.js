import { CARS_ENDPOINT } from "../settings";
import axios from "axios";

export const fetchCars = async () => {
  const {data} = await axios(CARS_ENDPOINT);
  // const {data} = await axios(CARS_ENDPOINT.slice(0, -3));
  console.log(data);
  // await new Promise((r) => setTimeout(r, 1000));
  return data;
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
