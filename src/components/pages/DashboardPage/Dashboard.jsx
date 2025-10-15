import Profile from "./components/Profile";
import "./Dashboard.css";

export default function Dashboard(){
    return(
        <div className="page">
            <Profile />
            <div className="iron-gallery-container">
                <div className="iron-gallery-header">
                    <h1> Iron gallery </h1>
                    <div className="iron-gallery-edit-button">
                        <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                    </div>
                </div>
            </div>
            
        </div>
    )
}