import HistoryEntry from "./HistoryEntry";

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

                <div className="history-entries-container">
                    <HistoryEntry />
                    <HistoryEntry />
                    <HistoryEntry />
                </div>
            </div>
        </div>
    )
}