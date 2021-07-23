import React from 'react'
import "./style.css"

function LoginBar(props) {
    return (
        <div className= "loginBar__container">
            {props.user ? (<h3>Logged in as {props.user.name}</h3>) : <h3>Login and save list</h3>}
        </div>
    )
}

export default LoginBar
