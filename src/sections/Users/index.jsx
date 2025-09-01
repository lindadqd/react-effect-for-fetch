import{ useEffect, useState } from 'react'

function UsersSection() {
  const url = "https://boolean-uk-api-server.fly.dev/lindadqd/contact"

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
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className= "users-list">
          {filteredData.map((user, index) => (
              <li key={index} style={{ background: user.favouriteColour }}>
              <img src={user.profileImage}/>
              <h3>{user.firstName +" "+ user.lastName}</h3>
              <p>Email: {user.email}</p>
              </li>
            ))}
        </ul>
      </div>
    </section>
  )
}

export default UsersSection
