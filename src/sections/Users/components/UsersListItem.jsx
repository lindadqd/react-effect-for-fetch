function UsersListItem({user, index}) {
    return (
    <li key={index} style={{ background: user.favouriteColour }}>
    <img src={user.profileImage}/>
    <h3>{user.firstName +" "+ user.lastName}</h3>
    <p>Email: {user.email}</p>
    </li>
    )

}

export default UsersListItem