import PublicationHistoryList from "./PublicationHistoryList"

function ArtListItem({art, index, baseUrl}){
    return (
            <div className= "frame" key={index}>
            <img src={baseUrl.baseUrl + art.imageURL} alt={art.name} key={index}/>
            <h3>{art.title}</h3>
            <p>{"Artist: " + art.artist}</p>
            <h4>Publication History: </h4>
            <PublicationHistoryList art={art}/>
            </div>
    )
}

export default ArtListItem