import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes/Routes'
import Nav from './components/Nav'


function App() {

  //Authentication state, default to unauthenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //Handle authentication
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  }

  return (
    <Router>
      <div className="app-body"> 
        <Routes 
          isAuthenticated={isAuthenticated} 
          onLoginSuccess={handleLoginSuccess}
        />
        
        {isAuthenticated && <Nav />}
      </div>
    </Router> 
  )
}

export default App
