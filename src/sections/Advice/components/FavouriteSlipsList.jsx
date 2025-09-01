function FavouriteSlipsList(props){
    const { favourites } = props
    return (
     <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favourites.map(slip => (
            <li key={slip.id}>{slip.advice}</li>
          ))}
        </ul>
      </section>
    )
}

export default FavouriteSlipsList