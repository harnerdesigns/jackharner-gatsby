import React from "react"

import GridGospel from "./gridGospel"
import DigitalOcean from "./digitalOcean"
import { random } from "lodash"
import HarnerDesigns from "./harnerDesigns"
import NordVPN from "./nordvpn"
import Printful from "./printful"
import Bonsai from "./bonsai"
import Namecheap from "./namecheap"
import Patreon from "./patreon"


const Shuffler = ({index}) => {

  let verts = [<GridGospel />, <HarnerDesigns />, <Patreon />, <Printful />, <DigitalOcean />, <NordVPN />, <Bonsai />, <Namecheap />] 

  let vertCount = verts.length

  if(!index) {index = random(1, vertCount)}


  return (verts[index])

  
}

export default Shuffler
