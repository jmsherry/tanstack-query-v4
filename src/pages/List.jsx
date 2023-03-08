import React, { /*useContext,*/ useEffect, Suspense } from "react";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import CarsList from "../components/CarsList";

import { useCars } from "./../rq/queries";
import { useDelete } from "./../rq/mutations";

const CarsListPage = () => {
  const deleteMutation = useDelete()
  const deleteHandler = (id) => {
    // console.log("Delete Handler", id);
    deleteMutation.mutate(id);
  };

  // const deleteHandler = () => {};

  const { data, isLoading, error, isError, isFetching } = useCars();

  let component = null;

  if (isLoading || isFetching) {
    component = <CircularProgress />;
  } else if (isError) {
    component = <p>Error: {JSON.stringify(error)}</p>;
  } else {
    component = <CarsList cars={data} deleteHandler={deleteHandler} />;
  }

  return (
    <>
      <Typography variant="h3" component="h2">
        Cars
      </Typography>
      {component}
    </>
  );
};

export default CarsListPage;
