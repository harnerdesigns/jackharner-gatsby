import React from "react"
import nordIcon from "../../images/nordvpn-logo.png"
import Vert from "./vert"

const NordVPN = () => {
    const link = "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=17089"
  return (

    <Vert
    link={link}
    image={nordIcon}
    slug="nordvpn"
    buttonText="Sign Up For NordVPN Today &raquo;"
  >
      <h2>
        Keep Your Internet History Away From Prying Eyes
      </h2>
        <h3>Hide your kid's, hide your wife's too. Up to 6 devices secured at a time.</h3>
    </Vert>
  )
}

export default NordVPN
