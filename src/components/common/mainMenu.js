import React, { Component, useEffect, useState } from "react"

import { Link } from "gatsby"

import ColorSwitcher from "./colorSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../atoms/button";


let linkSettings = {
    activeClassName: "active",
    partiallyActive: true
}

const MainMenu = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    let toggleMenu = () => {
        setIsOpen(!isOpen);
        setSubMenuOpen(false);
    }


    return (<>
        <nav className={"main_nav" + (isOpen ? " is-open" : "")}>

            <SubMenu link={{ link: "/services", text: "Services" }} links={[{ link: "/services/shopify", text: "Shopify", icon: ['fab', 'shopify'] }, { link: "/services/bigcommerce", text: "BigCommerce", icon: "shopping-cart" }, { link: "/services/wordpress", text: "WordPress", icon: ["fa-brands", "wordpress"] }]} subMenuOpen={subMenuOpen} setSubMenuOpen={setSubMenuOpen} />

            <SubMenu link={{ link: "/portfolio", text: "Portfolio" }} links={[{ link: "/portfolio/", text: "All Projects", extraSettings: { partiallyActive: false } }, { link: "/portfolio/tags/e-commerce/", text: "E-Commerce", icon: 'shopping-cart' }, { link: "/portfolio/tags/wordpress/", text: "WordPress", icon: ['fab', "wordpress"] }, { link: "/portfolio/tags/shopify/", text: "Shopify", icon: ['fab', "shopify"] }]} subMenuOpen={subMenuOpen} setSubMenuOpen={setSubMenuOpen} />

            <SubMenu link={{ link: "/blog", text: "Blog" }} links={[{ link: "/blog/", text: "All Posts", extraSettings: { partiallyActive: false } }, { link: "/blog/tags/freelance/", text: "Freelance", icon: 'bacon' }, { link: "/blog/tags/wordpress/", text: "WordPress", icon: ['fab', "wordpress"] }, { link: "/blog/tags/shopify/", text: "Shopify", icon: ['fab', "shopify"] }, { link: "/blog/tags/big-commerce/", text: "BigCommerce", icon: 'shopping-cart' }]} subMenuOpen={subMenuOpen} setSubMenuOpen={setSubMenuOpen} />
            <Link {...linkSettings} to="/newsletter">Newsletter</Link>
            <Link {...linkSettings} to="/why-me">Why Me?</Link>
            <ColorSwitcher />
            <Button to="/hire-me" className="button" label="Hire Me" />

        </nav>

        <button id="mobileMenuToggle" className={(isOpen ? "is-open" : "")} aria-label="Menu" onClick={toggleMenu} type={"button"}>
            <FontAwesomeIcon fixedWidth icon={(isOpen ? "times" : "bars")}></FontAwesomeIcon>
        </button>
        <button id="mobileMenuBG" className={(isOpen ? "is-open" : "")} onClick={toggleMenu} aria-label="Menu"><FontAwesomeIcon fixedWidth icon={"times"}></FontAwesomeIcon></button>
    </>)

}
export default MainMenu



const SubMenu = ({ link, links, subMenuOpen, setSubMenuOpen }) => {

    let menuID = link.link;
    let isOpen = (subMenuOpen === menuID)

    let openMenu = function (e) {
        e.preventDefault();
        if(!isOpen){
            setSubMenuOpen(menuID);
        } else {
            setSubMenuOpen(false);
        }
    }

    let linksMarkup = links.map((link, index) => {
        return (<Link {...linkSettings} {...link.extraSettings} key={index} to={link.link}>{link.icon && <FontAwesomeIcon icon={link.icon} />}{link.text}</Link>)
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




