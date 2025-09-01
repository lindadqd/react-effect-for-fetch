import UsersListItem from "./UsersListItem"

function UsersList(props) {
    const { users } = props

    return (
        <ul className= "users-list">
          {users.map((user, index) => (
            <UsersListItem user={user} key={index}/>
            ))}
        </ul>
    )
}

export default UsersList