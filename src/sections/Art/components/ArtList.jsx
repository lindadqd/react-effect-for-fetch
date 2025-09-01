import ArtListItem from "./ArtListItem"

function ArtList(props) {
    const { artList } = props
    const baseUrl = props

    console.log(baseUrl)
    return (
        <li>
        {artList.map((art, index) => (
            <ArtListItem art={art} key={index} baseUrl={baseUrl}/>
        ))}
        </li>
    )
}

export default ArtList