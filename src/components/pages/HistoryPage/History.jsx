import HistoryEntry from "./components/HistoryEntry";

export default function History(){
    return(
        <div className="page">
            <div className="history-container">
                <h1 className="main-header">HISTORY</h1>

                <div className="history-calendar-container">
                    <div className="history-month-selector">
                        <ion-icon name="calendar-outline"></ion-icon>
                    </div>
                    <div className="history-subtext">
                        <h2 className="month-text"> September </h2>
                        <p className="workouts-count"> 3 Workouts </p>
                    </div>
                </div>
                
                <div className="history-total-entries-container">
                    <HistoryEntry bgColor="rgba(255, 255, 255, 0.05)" />
                    <HistoryEntry bgColor="rgba(255, 255, 255, 0)"/>
                    <HistoryEntry bgColor="rgba(255, 255, 255, 0.05)" />
                    <HistoryEntry bgColor="rgba(255, 255, 255, 0)"/>
                    <HistoryEntry bgColor="rgba(255, 255, 255, 0.05)" />
                    <HistoryEntry bgColor="rgba(255, 255, 255, 0)"/>
                    <HistoryEntry bgColor="rgba(255, 255, 255, 0.05)" />
                    <HistoryEntry bgColor="rgba(255, 255, 255, 0)"/>
                </div>

            </div>
        </div>
    )
}