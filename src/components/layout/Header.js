import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TODO List</h1>
            <Link to="/" style={linkStyle} >Home</Link> | <Link to="/about" style={linkStyle} >About</Link>
        </header>
    )
}
const linkStyle = {
    color: '#fff'
}

const headerStyle = {
    textAlign: 'center',
    padding: '10px',
    background: '#333',
    color: '#fff'
}
export default Header
