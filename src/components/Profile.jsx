export default function Profile({currentXP = 75, maxXP=100, level=1}){

    const xpPercentage = (currentXP / maxXP) * 100;

    return(
        <div className="profile-container">
            <div className="profile-picture">
                <ion-icon name="person-circle-outline"></ion-icon>
            </div>
        
            <div className="profile-right-section">
                <h1> T I M M M </h1>

                <div className="xp-container">
                    <div className="xp-bar">
                        <p className="level-text"> {currentXP}/{maxXP} </p>

                        <div className="xp-progress"
                        style={{width: `${xpPercentage}%`}}>
                        </div>

                    </div>
                </div>

                <h2> WORKOUTS:46 </h2>
            </div>
        </div>
    )
}