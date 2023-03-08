import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CarForm from "../components/forms/CarForm";

import { getDiffOfTwoObjects } from "./../utils/index";
import { useUpdate } from "../rq/mutations";
import { useCars } from "../rq/queries";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useCars();
  const car = data.find(({ _id }) => _id === id);

  const updateMutation = useUpdate();

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
};

export default Update;
