import React from "react";
import Typography from "@mui/material/Typography";

import CarsList from "../components/CarsList";
import { QueryBoundaries } from "../components/QueryBoundaries";

import { useCars } from "./../rq/queries";
import { useDelete } from "./../rq/mutations";

const CarsListPage = () => {
  const deleteMutation = useDelete();

  const deleteHandler = (id) => {
    deleteMutation.mutate(id);
  };

  const { data } = useCars();

  return (
    <>
      <Typography variant="h3" component="h2">
        Cars
      </Typography>
      <QueryBoundaries>
        <CarsList cars={data} deleteHandler={deleteHandler} />
      </QueryBoundaries>
    </>
  );
};

export default CarsListPage;
