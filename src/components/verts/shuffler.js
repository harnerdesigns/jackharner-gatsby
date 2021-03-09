import React from "react"

import Brave from "./brave"
import Newsletter from "./newsletter"
import GridGospel from "./gridGospel"
import DigitalOcean from "./digitalOcean"
import RssCard from "../blog/rssCard"
import { random } from "lodash"
import HarnerDesigns from "./harnerDesigns"
import NordVPN from "./nordvpn"
import Printful from "./printful"


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
    default:
      return(null)
  }
}

export default Shuffler
