import{ useEffect, useState } from 'react'

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
          <li>
            {filteredData.map((art, index) => (
              <div className= "frame" key={index}>
              <img src={baseUrl + art.imageURL} alt={art.name} key={index}/>
              {console.log(baseUrl + art.image)}
              <h3>{art.title}</h3>
              <p>{"Artist: " + art.artist}</p>
              <h4>Publication History: </h4>
              <ul>
                <li>{art.publicationHistory[0]}</li>
                <li>{art.publicationHistory[1]}</li>
                <li>{art.publicationHistory[2]}</li>

              </ul>
              </div>
            ))}
            
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ArtsSection
