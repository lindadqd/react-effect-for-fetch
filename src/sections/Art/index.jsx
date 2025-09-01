import{ useEffect, useState } from 'react'
import ArtList from './components/ArtList'

function ArtsSection() {
  const baseUrl = "https://boolean-uk-api-server.fly.dev"
  const url = "https://boolean-uk-api-server.fly.dev/art"
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
    const response = await fetch(url)
    const jsonData = await response.json()
    setFilteredData(jsonData)
  }
  fetchData()
  }, [])



  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className='art-list'>
          <ArtList artList={filteredData} baseUrl = {baseUrl}/>
        </ul>
      </div>
    </section>
  )
}

export default ArtsSection
