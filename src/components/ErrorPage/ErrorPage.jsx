import { Link } from "react-router-dom";


const ErrorPage = () => {

    return (
        <div className="text-center my-12">
            <h3>Opps</h3>
            <h4>Path is Not Found</h4>
            <button className="bg-cyan-500 p-1 rounded text-red-600"><Link to="/">Go Back To Home</Link></button>
        </div>
    );
};

export default ErrorPage;