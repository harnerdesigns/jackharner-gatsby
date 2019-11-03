import React, { Component } from "react"

import { Link } from "gatsby"

import ColorSwitcher from "./colorSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



export default class MainMenu extends Component {

    constructor(props){
        super(props);

        this.state = {isOpen: false};
    }

    toggleMenu = () => {


        this.setState({isOpen: !this.state.isOpen});


    }

    render(){

    return(<>
        <nav className={"main_nav" + (this.state.isOpen ? " is-open" : "")}>
            <Link to="/portfolio">Portfolio</Link>
            <a href="https://resume.jackharner.com">Resumé</a>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            {/* <Link to="/mood">Mood</Link> */}
            <Link to="/contact">Contact</Link>
            <ColorSwitcher />

        </nav>

        <button id="mobileMenuToggle" onClick={this.toggleMenu} type={"button"}>
            <FontAwesomeIcon icon="bars"></FontAwesomeIcon>
        </button>
    </>)
    }


}




