import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import Typography from "@mui/material/Typography";
import CarForm from "../components/forms/CarForm";
import { fetchCars, updateCar } from "./../../API/index";
import { getDiffOfTwoObjects } from "./../utils/index";

function Update() {
  const { id } = useParams();

  const navigate = useNavigate();

  // Access the client
  const queryClient = useQueryClient();
  const query = useQuery({ queryKey: ["cars"], queryFn: fetchCars });

  const car = query.data.find(({ _id }) => _id === id);

  // Mutations
  const updateMutation = useMutation({
    mutationFn: updateCar,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["cars"] });
    },
  });

  const submitHandler = (formData) => {
    const updates = getDiffOfTwoObjects(car, formData);
    updateMutation.mutate({ id, data: updates }); // NOTE HOW YOU PASS MULTIPLE VARIABLES
    navigate("/");
  };

  return (
    <>
      <Typography variant="h2" component="h1" sx={{ marginBottom: 2 }}>
        Update Car
      </Typography>
      <CarForm car={car} submitHandler={submitHandler} />
    </>
  );
}

export default Update;
