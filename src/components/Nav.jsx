import {Link, useLocation} from "react-router-dom";

export default function Nav(){
    const location = useLocation();

    return(
        <nav className="nav-bar">
            <ul>
                <li> 
                    <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : 'not-active'}>
                        <ion-icon name="home-outline"></ion-icon> 
                    </Link>
                </li>

                <li> 
                    <Link to="/history" className={location.pathname === '/history' ? 'active' : 'not-active'}>
                        <ion-icon name="time-outline"></ion-icon>
                    </Link>
                </li>

                <li> 
                    <Link to="/workout-templates" className={location.pathname === '/workout-templates' ? 'active' : 'not-active'}>
                        <ion-icon name="barbell-outline"></ion-icon>
                    </Link>
                </li>

                <li> 
                    <Link to="/logout" className={location.pathname === '/logout' ? 'active' : 'not-active'}>
                        <ion-icon name="log-out-outline"></ion-icon>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}