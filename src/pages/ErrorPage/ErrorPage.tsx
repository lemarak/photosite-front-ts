import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <>
      <h3>Page Erreur </h3>
      <p>
        {error.message || error.statusText} ({error.status || "???"})
      </p>
    </>
  );
};

export default ErrorPage;
