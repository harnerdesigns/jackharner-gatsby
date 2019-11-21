import PropTypes from "prop-types"
import React from "react"


import MainMenu from "./mainMenu";

const Footer = ({ siteTitle }) => (
    <>
    <container class="slim black">
      <h2>Let's Make Something Awesome!</h2>
      <section class="workOrHire">
        <div class="work">
          <h3>Want To Work With Me?</h3>
          <p>I'm currently available for freelance work. Need help fixing some WordPress bugs, a whole new website, or just a quick refresh on your exisiting online presence? I'm your guy.</p><p>Hit me up on Twitter <a href="https://twitter.com/jackharner">@JackHarner</a> or <a href="mailto:jack@jackharner.com">Shoot Me An Email</a>.</p>
        </div>
        <div class="or tall">OR</div>
        <div class="hire">
          <h3>Want To Hire Me?</h3>
          <p>I'm looking for a Front End Developer role. I've worked extensively with WordPress/PHP, HTML/CSS, and a little React/Redux. I also make really good coffee.</p>
          <p>Check out my <a href="https://resume.jackharner.com">Resume</a>, <a href="https://harnerdesigns.com">Portfolio</a>, & <a href="https://github.com/harnerdesigns">Github</a> and <a href="mailto:jack@jackharner.com">Shoot Me An Email</a> if you think I'd be a good fit!</p>
        </div>
      </section>

    </container>
< footer className="slim pink main_footer" >

<section className="copyright">&copy; 2019 Jack Harner | <a href="https://github.com/harnerdesigns/jackharner-gatsby"> Built With Gatsby</a></section>
<MainMenu />

</footer >
</>
)

Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: ``,
}

export default Footer


    