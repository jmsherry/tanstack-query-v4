import React, { /*useContext,*/ useEffect, Suspense } from "react";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import CarsList from "../components/CarsList";

import { useCars } from "./../rq/queries";
// import { useDelete } from "./../rq/mutations";

const CarsListPage = () => {
  const { data, isLoading, error, isError, isFetching } = useCars();

  let component = null;

  if (isLoading || isFetching) {
    component = <CircularProgress />;
  } else if (isError) {
    component = <p>Error: {error.message}</p>;
  } else {
    component = <CarsList cars={data} />;
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
