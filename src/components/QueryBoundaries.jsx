import { Suspense } from "react";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import CircularProgress from "@mui/material/CircularProgress";

// Spinner
const LoadingView = () => <CircularProgress />;

// Error + retry
const ErrorView = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <div>{error.message}</div>
      <button title="Retry" onClick={resetErrorBoundary}>Retry</button>
    </div>
  );
};

// MakeFetchingEasy
export const QueryBoundaries = ({ children }) => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary onReset={reset} FallbackComponent={ErrorView}>
        <Suspense fallback={<LoadingView />}>{children}</Suspense>
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
);
