import React, { Component } from "react"

import { Link } from "gatsby"

import ColorSwitcher from "./colorSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../atoms/button";



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
            <Link to="/blog">Blog</Link>
            <Link to="/newsletter">Newsletter</Link>
            <Link to="/about">About</Link>
            <Link href="https://harnerdesigns.com/shop?utm_source=jackharner">Shop</Link>
            <ColorSwitcher />
            <Button to="/contact" className="button" label="Get In Touch"/>

        </nav>

        <button id="mobileMenuToggle" class={(this.state.isOpen ? "is-open" : "")} aria-label="Menu" onClick={this.toggleMenu} type={"button"}>
            <FontAwesomeIcon fixedWidth icon={(this.state.isOpen ? "times" : "bars")}></FontAwesomeIcon>
        </button>
        <button id="mobileMenuBG" class={(this.state.isOpen ? "is-open" : "")} onClick={this.toggleMenu} aria-label="Menu"></button>
    </>)
    }


}




