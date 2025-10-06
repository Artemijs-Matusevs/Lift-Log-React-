import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes/Routes'


function App() {

  //Authentication state, default to unauthenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="app-body"> 
        <Routes isAuthenticated={isAuthenticated}/>
      </div>
    </Router> 
  )
}

export default App
