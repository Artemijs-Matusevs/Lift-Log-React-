export default function HistoryEntry({ bgColor }){
    return(
        <div className="history-entry-container" style={{backgroundColor: bgColor,}}>
            <div className="history-entry-left">
                <h1 className="history-title"> Push </h1>
                <p className="history-subtitle"> Thursday 18 September 2025 at 07:16 </p>
            </div>
            <div className="history-entry-right">
                <h1> ... </h1>
            </div>
        </div>
    )
}