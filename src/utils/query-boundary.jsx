import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import CircularProgress from "@mui/material/CircularProgress";

// Spinner
const LoadingView = () => <CircularProgress />

// Error + retry
const ErrorView = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <div>{error.message}</div>
      <button title="Retry" onClick={resetErrorBoundary} />
    </div>
  );
};

// MakeFetchingEasy
export const QueryBoundaries = ({ children }) => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary onReset={reset} FallbackComponent={ErrorView}>
        <React.Suspense fallback={<LoadingView />}>
          {children}
        </React.Suspense>
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
);