import React, { Component, useState } from "react"

import { Link } from "gatsby"

import ColorSwitcher from "./colorSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../atoms/button";


let linkSettings = {
    activeClassName: "active",
    partiallyActive: true
}

export default class MainMenu extends Component {

    constructor(props) {
        super(props);

        this.state = { isOpen: false };
    }

    toggleMenu = () => {


        this.setState({ isOpen: !this.state.isOpen });


    }

    render() {

        return (<>
            <nav className={"main_nav" + (this.state.isOpen ? " is-open" : "")}>

                <SubMenu link={{ link: "/services", text: "Services" }} links={[{ link: "/services/shopify", text: "Shopify", icon: ['fab', 'shopify'] }, { link: "/services/bigcommerce", text: "BigCommerce", icon: "shopping-cart" }]} />

                <SubMenu link={{ link: "/portfolio", text: "Portfolio" }} links={[{ link: "/portfolio/", text: "All Projects" },{ link: "/portfolio/tags/e-commerce/", text: "E-Commerce", icon: 'shopping-cart' }, { link: "/portfolio/tags/wordpress/", text: "WordPress", icon: ['fab', "wordpress"] }, { link: "/portfolio/tags/shopify/", text: "Shopify", icon: ['fab', "shopify"] }]} />

                <SubMenu link={{ link: "/blog", text: "Blog" }} links={[{ link: "/blog/", text: "All Posts" }, { link: "/blog/tags/freelance/", text: "Freelance", icon: 'bacon' }, { link: "/blog/tags/wordpress/", text: "WordPress", icon: ['fab', "wordpress"] }, { link: "/blog/tags/shopify/", text: "Shopify", icon: ['fab', "shopify"] }, { link: "/blog/tags/big-commerce/", text: "BigCommerce", icon: 'shopping-cart' }]} />
                <Link {...linkSettings} to="/newsletter">Newsletter</Link>
                <Link {...linkSettings} to="/why-me">Why Hire Me?</Link>
                <ColorSwitcher />
                <Button to="/contact" className="button" label="Get In Touch" />

            </nav>

            <button id="mobileMenuToggle" className={(this.state.isOpen ? "is-open" : "")} aria-label="Menu" onClick={this.toggleMenu} type={"button"}>
                <FontAwesomeIcon fixedWidth icon={(this.state.isOpen ? "times" : "bars")}></FontAwesomeIcon>
            </button>
            <button id="mobileMenuBG" className={(this.state.isOpen ? "is-open" : "")} onClick={this.toggleMenu} aria-label="Menu"><FontAwesomeIcon fixedWidth icon={"times"}></FontAwesomeIcon></button>
        </>)
    }


}



const SubMenu = ({ link, links }) => {

    const [isOpen, setIsOpen] = useState(false)

    let openMenu = function (e) {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    let linksMarkup = links.map((link, index) => {
        return (<Link {...linkSettings} key={index} to={link.link}>{link.icon && <FontAwesomeIcon icon={link.icon} />}{link.text}</Link>)
    })

    return (
        <div className={"nav-submenu__wrapper" + (isOpen ? " is-open" : "")}>
            <Link {...linkSettings} onClick={openMenu} to={link.link}>{link.text} <FontAwesomeIcon icon="caret-down" className="caret" /></Link>
            {isOpen && links && linksMarkup &&

                <div className="nav-submenu__submenu">
                    {linksMarkup}
                </div>}
        </div>

    )
}




