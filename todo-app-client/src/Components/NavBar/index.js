import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

function NavBar() {
    return (
        <div class="navbar">
            <Link to = "/add-item">
            <button>Add Items</button>
            </Link>
            <button>Contact Developer</button>
        </div>
    )
}

export default NavBar
