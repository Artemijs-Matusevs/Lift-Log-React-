import {Routes, Route, Navigate} from 'react-router-dom';
import AuthMain from '../components/AuthMain';
import Dashboard from '../components/Dashboard';
import History from '../components/History';
import Templates from '../components/Templates';    

export default function AppRoutes({isAuthenticated, onLoginSuccess}){
    return(
        <>
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
                        <Dashboard /> :
                        <Navigate to="/" replace />
                    }
                />

                <Route
                    path="/history"
                    element={
                        isAuthenticated ?
                        <History /> :
                        <Navigate to="/" replace />
                    }
                />
                                
                <Route
                    path="/workout-templates"
                    element={
                        isAuthenticated ?
                        <Templates /> :
                        <Navigate to="/" replace />
                    }
                />

            </Routes>

        </>
    )
}