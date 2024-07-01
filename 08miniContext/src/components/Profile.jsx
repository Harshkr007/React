import React, { useContext } from 'react'
import UserContext from '../Context/UserContext.js'

function Profile() {
    const {user} = useContext(UserContext)

        if(!(user))return <div>Please Login</div>
        else if(user.username == ''){
            alert('enter username');
            return;
        }
        else if(user.password == ''){
            alert('enter password')
            return;
        }
        return (
            <div>Welcome:{user.username}</div>
        )

}

export default Profile