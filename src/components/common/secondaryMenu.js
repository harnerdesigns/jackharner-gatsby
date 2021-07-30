import React, { Component } from "react"

import { Link } from "gatsby"

import ColorSwitcher from "./colorSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../atoms/button";



const SecondaryMenu = () => {





    return(<>
        <nav className={"secondary_nav"}>
            <em>Other Pages:</em>
            <Link to="/affiliate">Affiliate Links</Link>
            <Link to="/uses">Tools I Use</Link>
        </nav>

    </>)


}


export default SecondaryMenu

