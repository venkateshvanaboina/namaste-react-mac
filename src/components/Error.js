import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();

    return (
        <div>
            <h1>OOPS......</h1>
            <h2>Still we are cooking</h2>
            <h3>{err.data} : {err.status}</h3>
        </div>
    )
}

export default Error;