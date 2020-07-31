import React from "react"
import braveIcon from "../../images/brave_lion_alt.png"

const Brave = () => {
  return (
    <section className="vert vert--brave vert--with-icon">
      <img src={braveIcon} alt="Brave Browser Logo" />
      <p>
        Want to support your favorite content creators (including me!) just by
        browsing the web? Check out <a href="https://brave.com/jac948">Brave</a>
        , a private, secure and fast web browser that pays YOU to browse.
      </p>

      <a className="button" href="https://brave.com/jac948">
        Learn More &raquo;
      </a>
    </section>
  )
}

export default Brave
