import React from "react"
import { random } from "lodash"

import GridGospel from "./gridGospel"
import DigitalOcean from "./digitalOcean"
import HarnerDesigns from "./harnerDesigns"
import NordVPN from "./nordvpn"
import Printful from "./printful"
import Bonsai from "./bonsai"
import Namecheap from "./namecheap"
import Patreon from "./patreon"


const Shuffler = ({index}) => {

  let verts = [<GridGospel />, <HarnerDesigns />, <Patreon />, <Printful />, <DigitalOcean />, <NordVPN />, <Bonsai />, <Namecheap />] 

  let vertCount = verts.length

  console.log({vertCount, index})

  if(index > vertCount){

    index = index % vertCount;

  } 
  
  if (index == null || index === 0) {
    index = random(0, vertCount)
  
  } 
    return(
      <>{verts[index]}</>
      )  



  
}

export default Shuffler
