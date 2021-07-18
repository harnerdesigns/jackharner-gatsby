import React from "react"
import MoreWithLess from "../../images/more-with-less.png"
// import Paranoid from "../../images/paranoid-tank.png"
import DeathBefore from "../../images/death-before-decaf.png"
import Sandias from "../../images/sandias-print.png"
import Vert from "./vert"

import Button from "../atoms/button";



const HarnerDesigns = () => {
    const link = "https://harnerdesigns.com/product/more-with-less/?utm_source=jackharner"
    return (
        <Vert
        link={link}
        slug="moreWithLess"
      >
          <h2>Prints, Shirts, & Mugs, OH MY!</h2>
<a class="product__image" href="https://harnerdesigns.com/product/sandia-sunset/?utm_source=jackharner"><img src={Sandias} alt="Sandias Sunset Print"/></a>
<a class="product__image" href="https://harnerdesigns.com/product/more-with-less/?utm_source=jackharner"><img src={MoreWithLess} alt="More With Less"/></a>
<a class="product__image" href="https://harnerdesigns.com/product/death-before-decaf-mug/?utm_source=jackharner"><img src={DeathBefore} alt="Death Before Decaf Mug"/></a>
<Button icon="shopping-bag" label={"Shop Harner Designs"} href="https://harnerdesigns.com/shop"
              extraStyle={{ background: "#E91E63", color: "#ffffff", marginTop: '1rem' }} />
        </Vert>
    )
}

export default HarnerDesigns
