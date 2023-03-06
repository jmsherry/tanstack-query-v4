import React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useQueryClient } from "@tanstack/react-query";
import CarForm from "../components/forms/CarForm";
import { addCar } from "../../API";


function Add() {

  const navigate = useNavigate();

  // Access the client
  const queryClient = useQueryClient();
  // Mutations
  const addMutation = useMutation({
    mutationFn: addCar,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["cars"] });
    },
  });

  const submitHandler = (data) => {
    addMutation.mutate(data);
    navigate("/");
  };

  return (
    <>
      <Typography variant="h2" component="h1">
        Add Car
      </Typography>
      <CarForm submitHandler={submitHandler} />
    </>
  );
}

export default Add;
