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
import Shaklee from "./shaklee"

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


const Shuffler = ({index}) => {

  let verts = [<GridGospel />, <Shaklee />, <Patreon />, <Printful />, <DigitalOcean />, <NordVPN />, <Bonsai />, <Namecheap />] 


  let vertCount = verts.length

  console.log({vertCount, index})

  if(index > vertCount){

    index = index % vertCount;

  } 
  
  if (index == null || index === undefined) {
    index = random(0, vertCount - 1)
    verts = shuffle(verts)
  
  } 
    return(
      <>{verts[index]}</>
      )  



  
}

export default Shuffler
