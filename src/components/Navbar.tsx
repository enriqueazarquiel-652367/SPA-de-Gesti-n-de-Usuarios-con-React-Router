import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
    const { user, logout } = useAuth();

    return (
        <nav>
            <Link to="/">Home</Link> | <Link to="/users">Users</Link>
            {user ? (
                <>
                    <span> | Welcome, {user}! </span>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <> | <Link to="/login">Login</Link></>
            )}
        </nav>
    );
}

export default Navbar;
