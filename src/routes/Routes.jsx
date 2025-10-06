import {Routes, Route, Navigate} from 'react-router-dom';
import AuthMain from '../components/AuthMain';
//import Dashboard from '../components/Dashboard';

export default function AppRoutes({isAuthenticated, onLoginSuccess}){
    return(
        <Routes>
            <Route
                path="/"
                element={
                    isAuthenticated ? 
                    <Navigate to="/dashboard" replace /> : 
                    <AuthMain onLoginSuccess={onLoginSuccess}/>
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