function AdviceSlip(props){
    const {random, handleAddFavourite, fetchData} = props
    
    return(
    <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>{random && random.slip ? random.slip.advice : "Loading..."}</p>
        <button onClick={fetchData}>Get More Advice</button>
          <button onClick={handleAddFavourite} disabled={!random || !random.slip}>
            Save to Favourites
        </button>
    </section>
    )
}

export default AdviceSlip