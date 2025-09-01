import{ useEffect, useState } from 'react'
import AdviceSlip from './components/AdviceSlip'
import FavouriteSlipsList from './components/FavouriteSlipsList'

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
      if (!favourites.some(fav => fav.id === random.slip.id)) {
        setFavourites([...favourites, random.slip])
      }
    }
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip random={random} handleAddFavourite={handleAddFavourite} fetchData = {fetchData}/>
     <FavouriteSlipsList favourites={favourites}/>
    </section>
  )
}

export default AdviceSection

 
