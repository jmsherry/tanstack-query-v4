import React from "react";
import Typography from "@mui/material/Typography";

import CarsList from "../components/CarsList";
import { QueryBoundaries } from "../components/QueryBoundaries";

const CarsListPage = () => {
  return (
    <>
      <Typography variant="h3" component="h2">
        Cars
      </Typography>
      <QueryBoundaries>
        <CarsList />
      </QueryBoundaries>
    </>
  );
};

export default CarsListPage;
