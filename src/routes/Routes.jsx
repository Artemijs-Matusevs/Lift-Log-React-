import {Routes, Route, Navigate} from 'react-router-dom';
import AuthMain from '../components/AuthMain';
//import Dashboard from '../components/Dashboard';

export default function AppRoutes({isAuthenticated}) {
    return(
        <Routes>
            <Route
                path="/"
                element={
                    isAuthenticated ? <Navigate to="/dashboard" /> : <AuthMain />
                }
            />
            <Route
                path="/dashboard"
                element={
                    isAuthenticated ?
                    <h1> Hello world </h1> :
                    <Navigate to="/" replace />
                }
            />

        </Routes>
    )
}