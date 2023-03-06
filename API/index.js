import { CARS_ENDPOINT } from "../src/settings";

export const fetchCars = async () => {
  return fetch(CARS_ENDPOINT).then((resp) => resp.json());
};

export const fetchCar = async (id) => {
  return fetch(`${CARS_ENDPOINT}${id}`).then((resp) => resp.json());
};

export const addCar = async (formData) => {
  console.log("about to add", formData);
  return fetch(CARS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }).then((resp) => resp.json());
};

export const updateCar = async (...args) => {
  console.log("in api", args);
  // return fetch(`${CARS_ENDPOINT}${id}`, {
  //   method: "PUT",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(formData),
  // }).then((resp) => resp.json());
};

export const deleteCar = async (id) => {
  return fetch(`${CARS_ENDPOINT}${id}`, {
    method: "DELETE",
  });
};
