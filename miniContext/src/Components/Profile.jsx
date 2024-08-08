import { useContext } from "react"
import React from 'react'
import UserContext from "../Context/UserContext"

function Profile() {

    const{user} = useContext(UserContext)

    if(!user) return <div>please login</div>
    return <div>
        <h1>hello {user.userName} </h1>
    </div>
  
}

export default Profile