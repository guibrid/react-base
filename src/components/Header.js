import React, { Component } from "react"

class Header extends Component {

    componentDidUpdate(prevProps, prevState) {

        var x = Math.floor(Math.random() * 256)
        var y = Math.floor(Math.random() * 256)
        var z = Math.floor(Math.random() * 256)
        var bgColor = "rgb(" + x + "," + y + "," + z + ")"

        if (prevProps.headerSpan !== this.props.headerSpan) {
            document.getElementById("inH1").innerHTML = "clicked";
            document.getElementById("inH1").style.backgroundColor = bgColor;
        }

    }

    render() {
        const subHeaderStyle = {
            padding: "10px 0",
            color:"#CCCCCC"
        }

        return (
            <header>
                <h1 style={{ fontSize: "25px", marginBottom: "15px"}}>App <span id="inH1"></span></h1>
                <p style={subHeaderStyle}>To-dos</p>
            </header>
        )
    }
}

export default Header