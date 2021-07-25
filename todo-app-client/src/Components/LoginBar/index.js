import React from 'react'
import "./style.css"

function LoginBar(props) {
    const jsxText = "LOG IN";
    // if(props.user.onSignUp === true){
    //     jsxText = <h3>Already Have an Account? Log In</h3>
    // } else if(props.user.onLogIn === true){
    //     jsxText = <h3>Create an Account</h3>
    // } else if (props.user.loggedIn === true){
    //     jsxText = <h3>Logged In As {props.user.name}</h3>
    // } else if (props.user.loggedIn === false){
    //     jsxText = <h3>Log In and Save Progress!</h3>
    // }
    return (
        <div className= "loginBar__container">
            {jsxText}
        </div>
    )
}

export default LoginBar
