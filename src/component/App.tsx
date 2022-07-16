import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { FlickrSearch } from "./FlickrSearch";
import { Header } from "./Header";

const ErrorFallback = () => {
  return <div>Something went wrong</div>;
};

const App = () => {
  const [term, setTerm] = useState("car");

  return (
    <>
      <Header term={term} setTerm={setTerm} />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <FlickrSearch term={term} />;
      </ErrorBoundary>
    </>
  );
};

export default App;
