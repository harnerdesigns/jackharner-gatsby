import React, { Component, useEffect, useState } from "react"

import { Link } from "gatsby"

import ColorSwitcher from "./colorSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../atoms/button";


const FooterMenu = (props) => {


    return (<>
        <nav className={"footer-nav"}>

            <FooterSubMenu title="Services" links={[{ link: "/services/shopify", text: "Shopify", icon: ['fab', 'shopify'] }, { link: "/services/bigcommerce", text: "BigCommerce", icon: "shopping-cart" }]} />

            <FooterSubMenu title="Projects" links={[{ link: "/portfolio/", text: "All Projects", extraSettings: { partiallyActive: false } }, { link: "/portfolio/tags/e-commerce/", text: "E-Commerce", icon: 'shopping-cart' }, { link: "/portfolio/tags/wordpress/", text: "WordPress", icon: ['fab', "wordpress"] }, { link: "/portfolio/tags/shopify/", text: "Shopify", icon: ['fab', "shopify"] }]} />

            <FooterSubMenu title="Blog" links={[{ link: "/blog/", text: "All Posts", extraSettings: { partiallyActive: false } }, { link: "/blog/tags/freelance/", text: "Freelance", icon: 'bacon' }, { link: "/blog/tags/wordpress/", text: "WordPress", icon: ['fab', "wordpress"] }, { link: "/blog/tags/shopify/", text: "Shopify", icon: ['fab', "shopify"] }, { link: "/blog/tags/big-commerce/", text: "BigCommerce", icon: 'shopping-cart' }]} />
            <FooterSubMenu title="Why Me?" links={[{ link: "/why-me/", text: "I'll Tell You Why" }, { link: "/testimonials/", text: "Testimonials" }, { link: "/hire-me", text: "Hire Me" }]}  />
            <FooterSubMenu title="Other" links={[{ link: "/newsletter", text: "Newsletter" }, { link: "/affiliate", text: "Affiliate Links" },  { link: "/uses", text: "Tools I Use" }, { link: "/links", text: "Quick Links" },  ]}  />

        </nav>
    </>)

}
export default FooterMenu



const FooterSubMenu = ({ title, links }) => {


    let linksMarkup = links.map((link, index) => {
        return (<Link {...link.extraSettings} key={index} to={link.link}>{link.icon && <FontAwesomeIcon icon={link.icon} />}{link.text}</Link>)
    })

    return (
        <div className={"nav-footersubmenu__wrapper"}>
            <h4>{title}</h4>
            {links && linksMarkup &&

                <div className="nav-footersubmenu">
                    {linksMarkup}
                </div>}
        </div>

    )
}




