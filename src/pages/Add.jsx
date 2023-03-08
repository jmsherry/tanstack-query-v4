import React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CarForm from "../components/forms/CarForm";
import { useAdd } from "../rq/mutations";

const Add = () => {
  const navigate = useNavigate();
  const addMutation = useAdd();

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
};

export default Add;
