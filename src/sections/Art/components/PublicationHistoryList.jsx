
function PublicationHistoryList({art}){
    return(
        <ul>
            <li>{art.publicationHistory[0]}</li>
            <li>{art.publicationHistory[1]}</li>
            <li>{art.publicationHistory[2]}</li>
        </ul>
    )
}

export default PublicationHistoryList