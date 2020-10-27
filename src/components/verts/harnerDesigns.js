import React from "react"
import MoreWithLess from "../../images/more-with-less.png"
import Vert from "./vert"


const HarnerDesigns = () => {
    const link = "https://harnerdesigns.com/product/more-with-less/?utm_source=jackharner"
    return (
        <Vert
        link={link}
        image={MoreWithLess}
        slug="moreWithLess"
        buttonText="Get This Shirt &raquo;"
      >
                <h2 style={{color: "var(--color)"}}>!! NEW SHIRT ALERT !!</h2>
                <h3>Why Do Less With More,</h3>
                <h3>When You Can Do</h3>
                <h2>More With Less?</h2>
        </Vert>
    )
}

export default HarnerDesigns
