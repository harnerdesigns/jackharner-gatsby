import React from "react"

import Brave from "./brave"
import Newsletter from "./newsletter"
import GridGospel from "./gridGospel"
import RssCard from "../../components/blog/rssCard"
import { random } from "lodash"
import HarnerDesigns from "./harnerDesigns"


const Vert = ({index}) => {

  let vertCount = 3;

  if(!index) {index = random(1, vertCount)}

  switch(index){
    case 1: 
      return(<GridGospel />)   
    case 2: 
      return(<Brave />)
    case 3: 
      return(<HarnerDesigns />)
    default:
      return(null)
  }
}

export default Vert
