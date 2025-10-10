import Profile from "./Profile";

export default function Dashboard(){
    return(
        <div className="page">
            <Profile />
            <div className="iron-gallery-container">
                <div className="iron-gallery-header">
                    <h1> IRON GALLERY </h1>
                    <h1 className="iron-gallery-settings"> ... </h1>
                </div>
            </div>
            
        </div>
    )
}