import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-center my-5">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to='/'> <button className="button btn btn-primary">Go Back</button></Link>
    
    </div>
  );
}