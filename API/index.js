import { CARS_ENDPOINT } from "../src/settings";

export const fetchCars = async () => {
  return fetch(CARS_ENDPOINT).then((resp) => resp.json());
  return fetch(CARS_ENDPOINT.slice(0, -3)).then((resp) => resp.json());
};

export const fetchCar = async (id) => {
  return fetch(`${CARS_ENDPOINT}${id}`).then((resp) => resp.json());
};

export const addCar = async (data) => {
  console.log("about to add", data);
  return fetch(CARS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
};

export const updateCar = async ({ id, data }) => {
  console.log("in api", id, data);
  return fetch(`${CARS_ENDPOINT}${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
};

export const deleteCar = async (id) => {
  return fetch(`${CARS_ENDPOINT}${id}`, {
    method: "DELETE",
  });
};
