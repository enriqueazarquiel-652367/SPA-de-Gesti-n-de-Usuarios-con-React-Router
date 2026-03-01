import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/users"
                        element={
                            <PrivateRoute>
                                <Users />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/users/:id"
                        element={
                            <PrivateRoute>
                                <UserDetail />
                            </PrivateRoute>
                        }
                    />
                    <Route path="*" element={<h2>Page not found</h2>} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
