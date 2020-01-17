import PropTypes from "prop-types"
import React from "react"

import Link from "../atoms/maybeExternal";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"




const RssCard = () => (
    <Link to={"/rss"} className={"rss__link-card"}>

        <h3><FontAwesomeIcon icon="rss"/> Subscribe Via RSS</h3>


    </Link>
)

export default RssCard 





