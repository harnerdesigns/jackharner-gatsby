import React from "react"
import patreonWordmark from "../../images/Digital-Patreon-Wordmark_White.png"
import patreonIcon from "../../images/Digital-Patreon-Logo_White.png"
import Vert from "./vert"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Patreon = () => {
    const link = "https://www.patreon.com/jackharner"
  return (

    <Vert
    link={link}
    image={null}
    slug="patreon"
    buttonText={<><img src={patreonIcon} />Join Today! &raquo;</>}
  >
    <img src={patreonWordmark} alt="Patreon" />
      <h2>
      Support my software, writing, and art by joining my Patreon! </h2>
      <ul class="patreon__perks">
        <li><FontAwesomeIcon icon={'camera'} />Behind The Scenes</li>
        <li><FontAwesomeIcon icon={'lock'} />Patron Only Posts</li>
        <li><FontAwesomeIcon icon={'calendar'} />Early Access</li>
        <li><FontAwesomeIcon icon={['fab', 'discord']} />VIP Discord</li>
      </ul>
    </Vert>
  )
}

export default Patreon
