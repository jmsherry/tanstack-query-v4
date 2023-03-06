import React, { /*useContext,*/ useEffect } from "react";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import {
  useQuery,
  useMutation,
  useQueryClient,
  // QueryErrorResetBoundary,
  useQueryErrorResetBoundary,
} from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

import { fetchCars, deleteCar } from "./../../API/index";

import CarsList from "../components/CarsList";

function CarsListPage() {
  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const query = useQuery({ queryKey: ["cars"], queryFn: fetchCars });
  // console.log(query);

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

  const { reset } = useQueryErrorResetBoundary();

  return (
    <>
      <Typography variant="h3" component="h2">
        Cars
      </Typography>
      {/* {callStatusComponent} */}
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ resetErrorBoundary }) => (
          <div>
            There was an error!
            <Button onClick={() => resetErrorBoundary()}>Try again</Button>
          </div>
        )}
      >
        <CarsList cars={query.data} deleteHandler={deleteHandler} />
      </ErrorBoundary>
    </>
  );
}

export default CarsListPage;
