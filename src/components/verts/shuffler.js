import React from "react"

import GridGospel from "./gridGospel"
import DigitalOcean from "./digitalOcean"
import { random } from "lodash"
import HarnerDesigns from "./harnerDesigns"
import NordVPN from "./nordvpn"
import Printful from "./printful"
import Bonsai from "./bonsai"
import Namecheap from "./namecheap"


const Shuffler = ({index}) => {

  let vertCount = 5

  if(!index) {index = random(1, vertCount)}

  switch(index){
    case 1: 
      return(<GridGospel />)   
    case 2: 
      return(<HarnerDesigns />)
    case 3: 
      return(<Printful />)
    case 4:
      return(<DigitalOcean />)
    case 5:
        return(<NordVPN />)
    case 6:
        return(<Bonsai />)
    case 7:
        return(<Namecheap />)
    default:
      return(null)
  }
}

export default Shuffler
