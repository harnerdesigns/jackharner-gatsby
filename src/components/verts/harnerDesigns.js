import React from "react"
import MoreWithLess from "../../images/more-with-less.png"


const HarnerDesigns = () => {
    return (
        <section className="vert vert--moreWithLess vert--with-icon">
            <a className="vert__img-wrap" href="https://harnerdesigns.com/product/more-with-less/?utm_source=jackharner">

                <img src={MoreWithLess} alt="More With Less T Shirt" />
            </a>
            <div className="vert__content">
                <h2>Why Do Less With More,</h2>
                <h2>When You Can Do</h2>
                <h1><a href="https://harnerdesigns.com/product/more-with-less/?utm_source=jackharner">More With Less?</a></h1>
            </div>
            <a className="button" href="https://harnerdesigns.com/product/more-with-less/?utm_source=jackharner">
                Get This Shirt &raquo;
      </a>
        </section>
    )
}

export default HarnerDesigns
