import { useQuery } from "@tanstack/react-query";
import { fetchCars, fetchCar } from "../API/index";
import { STORAGE_KEY } from "./../settings";

export const useCars = ({
  onSuccess = () => {},
  onError = (err) => {
    console.log(err);
  },
} = {}) =>
  useQuery({
    queryKey: [STORAGE_KEY],
    queryFn: fetchCars,
    // onSuccess,
    // onError,
  });

export const useCar = ({ onSuccess, onError } = {}) =>
  useQuery({
    queryKey: [STORAGE_KEY],
    queryFn: fetchCar,
    onSuccess,
    onError,
  });
