import React, { /*useContext,*/ useEffect, Suspense } from "react";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";


import { fetchCars, deleteCar } from "./../../API/index";

import CarsList from "../components/CarsList";

function CarsListPage() {
  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const { data, isLoading, error } = useQuery({
    queryKey: ["cars"],
    queryFn: fetchCars,
  });
  // console.log('data', data);

  // Mutations
  const deleteMutation = useMutation({
    mutationFn: deleteCar,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["cars"] });
    },
  });

  const deleteHandler = (id) => {
    // console.log("Delete Handler", id);
    deleteMutation.mutate(id);
  };

  // const { reset } = useQueryErrorResetBoundary();

  let component = null;
  if (isLoading) {
    component = <CircularProgress />;
  } else if (error) {
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
}

export default CarsListPage;
