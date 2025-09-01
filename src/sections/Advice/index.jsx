import{ useEffect, useState } from 'react'

function AdviceSection() {
  const url = "https://api.adviceslip.com/advice"
  const [random, setRandom] = useState(null)
  const [favourites, setFavourites] = useState([])

   const fetchData = async () => {
      const response = await fetch(url)
      const jsonData = await response.json()
      setRandom(jsonData)
    }

  useEffect(() => {
    fetchData()
  }, [])

   const handleAddFavourite = () => {
    if (random && random.slip) {
      // Avoid duplicates
      if (!favourites.some(fav => fav.id === random.slip.id)) {
        setFavourites([...favourites, random.slip])
      }
    }
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>{random && random.slip ? random.slip.advice : "Loading..."}</p>
        <button onClick={fetchData}>Get More Advice</button>
          <button onClick={handleAddFavourite} disabled={!random || !random.slip}>
            Save to Favourites
          </button>
      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favourites.map(slip => (
            <li key={slip.id}>{slip.advice}</li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default AdviceSection

 
