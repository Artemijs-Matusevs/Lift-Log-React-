export default function Profile({currentXP = 34, maxXP=100, level=17}){

    const xpPercentage = (currentXP / maxXP) * 100;

    return(
        <div className="profile-container">
            <div className="profile-picture">
                <ion-icon name="person-circle-outline"></ion-icon>
            </div>
        
            <div className="profile-right-section">
                <div className="name-container">
                    <h1 className="username"> T I M M M m m m</h1>
                    <div className="level-badge">
                        <p> {level} </p>
                    </div>
                </div>

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