import{ useEffect, useState } from 'react'
import UsersList from './components/UsersList'

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
        <UsersList users={filteredData}/>
      </div>
    </section>
  )
}

export default UsersSection
