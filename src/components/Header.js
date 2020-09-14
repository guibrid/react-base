import React from "react"

const Header = () => {

    const subHeaderStyle = {
        padding: "10px 0",
        color:"#CCCCCC"
    }

    return (
        <header>
            <h1 style={{ fontSize: "25px", marginBottom: "15px"}}>App</h1>
            <p style={subHeaderStyle}>To-dos</p>
        </header>
    )
}

export default Header