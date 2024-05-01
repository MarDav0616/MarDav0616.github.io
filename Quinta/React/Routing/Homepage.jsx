import { Outlet, useNavigate } from "react-router-dom";

function Homepage() {
    const navigate = useNavigate();
    return (
        <>
            <center>
                <h1>Homepage</h1>
                <button onClick={() => navigate('/page')}>Vai alla pagina</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Outlet />
            </center>
        </>
    )
}

export default Homepage