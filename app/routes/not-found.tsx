import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="m-auto flex flex-col">
        <h1 className="text-2xl text-center mb-3">Sorry, we couldn't find what you're looking for</h1>
        <Link to="/" className="m-auto text-center">Back to main page</Link>
    </div>
  )
}

export default NotFound;