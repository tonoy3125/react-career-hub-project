import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-48">
            <h1>Unexpected Application Error! <br />
                404 Not Found</h1>
            <button className="mt-5 btn btn-accent"><Link to="/">Go Home</Link></button>
        </div>
    );
};

export default ErrorPage;