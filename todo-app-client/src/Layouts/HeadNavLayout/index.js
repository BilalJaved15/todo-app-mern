import React from 'react'
import Header from '../../Components/Header'
import NavBar from '../../Components/NavBar'
import "./style.css"

function HeadNavLayout(props) {
    return (
        <div className="headerLayout__container">
            <Header/>
            <NavBar/>
            <div className= "headerLayout__listContainer">
            {props.children}
            </div>
        </div>
    )
}

export default HeadNavLayout
