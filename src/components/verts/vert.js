import React from "react"

import Brave from "./brave"
import Newsletter from "./newsletter"
import RssCard from "../../components/blog/rssCard"


const Vert = ({index}) => {

  switch(index){
    case 1: 
      return(<Newsletter />)    
    case 2: 
      return(<Brave />)
    case 3:
      return(<RssCard />)
    default:
      return(null)
  }
}

export default Vert
