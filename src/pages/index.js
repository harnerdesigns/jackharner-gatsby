import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ImASlider from "../components/imASlider"




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



import shooluLogo from '../images/shoolu-logo.svg';
import materialLogo from '../images/material-color-logo-text.svg';
import bleedingLogo from '../images/BleedingCoffee-logo-white.svg';
import harnerDesignsLogo from '../images/harner-designs-white.svg';


 
const IndexPage = () => (
  <Layout>
    <SEO title="Jack Harner" />
    <container class="full black">
      <section class="introduction">
        <h1>Hi, I'm <b>Jack&nbsp;Harner</b></h1>
        <h2>Jack of All Trades, Master of Some</h2>
        <ImASlider />
      </section>
      <FontAwesomeIcon icon="caret-down" id="scrollIndicator" /> 
    </container>
    <container class="full pink">
      <h2 class="tagline">I Make Websites.</h2>
      <p class="tagline">I work mostly with <a href="https://harnerdesigns.com/project/tag/wordpress/">WordPress</a>, PHP, & React, but I love me some good 'ole fashion HTML/CSS.</p>
      <p class="tagline">Now and then, I write about <a href="https://harnerdesigns.com/blog">Web Design</a> & <a
        href="https://bleedingcoffee.com">Coffee</a>.</p>

    </container>
    
    <container class="full white">
      <h2>Recent Projects</h2>
      <div class="things">
        <header class="things__tabs">
          <div class="thing" data-target="#harnerdesigns-thing" style={{background: "#3e50b4"}}>
            <a href="https://harnerdesigns.com" target="_blank" rel="noopener" aria-label="Harner Designs">
							<img src={harnerDesignsLogo} />
            </a>
          </div>
          <div class="thing" data-target="#materialcolor-thing" style={{background: "#fff"}}>
            <a href="https://materialcolor.xyz" target="_blank" rel="noopener" aria-label="Material Color">
              
                <img src={materialLogo} />
            </a>
          </div>
          <div class="thing" data-target="#shoolu-thing" style={{background: "#0fb681"}}>
            <a href="https://shoolu.com" target="_blank" rel="noopener" aria-label="Shoolu">
              <img src={shooluLogo} />
            </a>
          </div>


          <div class="thing" data-target="#bleedingcoffee-thing" style={{background: "#4b2c20"}}>
            <a href="https://bleedingcoffee.com" target="_blank" rel="noopener" aria-label="Bleeding Coffee">
              <img src={bleedingLogo} />
            </a>
          </div>

        </header>

        <section class="things__body">
          <div class="content" id="harnerdesigns-thing">
            <h3>Harner Designs</h3>
            <p>This is the home of all of my Web Design / Development work and writing. It was born out of
              nessecity for a portfolio website after I had lost the JackHarner.com domain. I'll save that
						story for another time.</p>
            <div class="buttons"><a href="https://harnerdesigns.com" class="button">Check Out My Work »</a>
            </div>
          </div>
          <div class="content" id="materialcolor-thing">
            <h3>Material Color Palette</h3>
            <p>A Chrome & Firefox extension I developed that puts the Material Design color codes right at your
              fingertips. Click to copy HEX, #HEX, RGB, RGBA, HSL, & HSLA for whatever format color code you
						need.</p>
            <p>I got tired of looking up the documentation every time I needed a color code. With over 1,000
              users across both browsers, quick access to one of the most popular color palettes was needed.
					</p>
            <div class="buttons"><a href="https://materialcolor.xyz" class="button">Get The Extension »</a><a
              href="https://github.com/harnerdesigns/material-color" class="button">See The Code »</a>
            </div>

          </div>
          <div class="content" id="shoolu-thing">
            <h3>Shoolu</h3>
            <p>Full disclosure: I currently work at Shoolu as the Marketing Director. My job is essentially
						anything and everything related to driving and converting traffic to the website.</p>
            <p>This included maintaining and updating the website, developing internal and customer facing
              tools, designing and developing email marketing campaigns, managing paid advertising campaigns,
						developing social media content and more.</p>
            <div class="buttons"><a href="https://shoolu.com" class="button">Check Out The Site »</a><a
              href="https://harnerdesigns.com/clients/shoolu" class="button">More Shoolu Projects »</a>
            </div>

          </div>
          <div class="content" id="bleedingcoffee-thing">
            <h3>Bleeding Coffee</h3>
            <p>I like Coffee. A lot.</p>
            <p>So I created a blog about coffee to help fund my caffeine addiction. Learn how to use a French
						Press, what all the different kinds of coffee drinks are and more!</p>
            <div class="buttons"><a href="https://bleedingcoffee.com" class="button">It's Coffee Time »</a>
            </div>
          </div>
        </section>
      </div>
    </container>

    <container class="full pink">

      <h3 class="tagline"><a href="https://harnerdesigns.com/contact/">Want to work with me?</a></h3>


    </container>
    <container class="full white" id="followMe">
      <h2>Let's Chat</h2>
      <section class="socials">
        <a target="_blank" rel="noopener" href="https://twitter.com/jackharner" class="twitter">
          <FontAwesomeIcon icon={["fab","twitter"]} />Twitter
			</a>
        <a target="_blank" rel="noopener" href="https://instagram.com/jackharner" class="instagram">
          <FontAwesomeIcon icon={["fab", "instagram"]} />Instagram
			</a>
        <a target="_blank" rel="noopener" href="https://dribbble.com/jackharner" class="dribbble">
          <FontAwesomeIcon icon={["fab", "dribbble"]} />Dribbble
			</a>
        <a target="_blank" rel="noopener" href="https://dev.to/jackharner" class="devto">
          <FontAwesomeIcon icon={["fab", "dev"]} />Dev.to
			</a>
        <a target="_blank" rel="noopener" href="https://github.com/harnerdesigns" class="github">
          <FontAwesomeIcon icon={["fab", "github"]} />GitHub
			</a>
        <a target="_blank" rel="noopener" href="https://www.producthunt.com/@jackharner" class="producthunt">
          <FontAwesomeIcon icon={["fab", "product-hunt"]} />Product Hunt
			</a>
      </section>
    </container>

    <a href="#followMe" id="followMeBanner" aria-label="Click here for my social accounts.">
      <svg id="followMeSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920"
      fill="#fff">
      <path
        d="M305.888 1234.03c-10.314 10.314-14.454 21.944-12.421 34.891 2.033 12.95 8.96 25.332 20.777 37.149l29.81 29.81c11.895 11.896 24.372 18.839 37.431 20.833 13.061 1.995 24.747-2.163 35.061-12.478 10.01-10.01 14.001-21.528 11.969-34.552-2.032-13.021-8.993-25.479-20.89-37.375l-29.809-29.81c-11.744-11.743-24.145-18.612-37.206-20.607-13.06-1.993-24.635 2.052-34.722 12.139z" />
      <path
        d="M-832.24 2202.528l274.713 274.713 2780-2780-274.713-274.713-2780 2780zm1057.054-882.682l-77.347 77.347 39.52 39.521 65.83-65.829 29.357 29.357-65.829 65.83 66.168 66.168-38.278 38.278-164.404-164.405 115.626-115.625 29.357 29.358zm220.863-85.59c20.251 20.251 30.524 43.361 30.826 69.33.302 25.973-9.899 49.307-30.6 70.008-20.853 20.852-44.319 31.187-70.403 30.995-26.084-.188-49.249-10.406-69.499-30.656l-29.584-29.584c-20.173-20.173-30.394-43.302-30.656-69.387-.263-26.081 9.993-49.513 30.769-70.29 20.625-20.624 44-30.823 70.121-30.6 26.12.228 49.27 10.427 69.443 30.6l29.583 29.584zm198.619-63.797L535.22 1279.535 370.814 1115.13l38.278-38.278 135.047 135.047 70.798-70.798 29.359 29.358zm125.223-125.223l-109.076 109.076-164.406-164.405 38.278-38.278 135.047 135.047 70.798-70.798 29.359 29.358zm81.863-216.684c20.251 20.25 30.524 43.36 30.826 69.329.303 25.973-9.899 49.307-30.601 70.008-20.852 20.853-44.319 31.187-70.402 30.995-26.083-.188-49.249-10.405-69.499-30.656l-29.584-29.584c-20.173-20.173-30.394-43.302-30.656-69.387-.263-26.081 9.993-49.513 30.769-70.29 20.626-20.624 44-30.824 70.121-30.6 26.12.228 49.27 10.428 69.442 30.6l29.584 29.585zm243.22-108.4l-35.907 35.907-129.063-73.734-.677.679 73.96 128.835-35.907 35.907-202.232-126.577 37.035-37.036L931.212 770.4l.678-.678-78.814-136.853 26.535-26.535 136.966 78.701.678-.677-86.268-129.4 36.924-36.925 126.691 202.119zm284.546-284.547l-38.278 38.278-40.762-40.762-71.477-78.703-.79.565 76.331 155.597-25.745 25.745-154.129-75.767-.564.79 77.686 70.46 40.763 40.764-38.278 38.276L1039.5 446.445l50.134-50.136 151.872 78.252.678-.679-77.8-152.322 50.36-50.36 164.404 164.405zm5.195-275.287l-76.218 76.219 35.343 35.342 64.474-64.476 29.358 29.358-64.475 64.476 40.988 40.988 75.992-75.993 29.357 29.358-114.27 114.27-164.405-164.403 114.496-114.497 29.36 29.358z" />
      <path
        d="M711.593 828.325c-10.313 10.314-14.453 21.944-12.421 34.891 2.033 12.951 8.959 25.332 20.776 37.149l29.81 29.81c11.896 11.896 24.372 18.84 37.432 20.833 13.062 1.995 24.746-2.163 35.061-12.478 10.01-10.01 14.002-21.528 11.969-34.552-2.032-13.021-8.994-25.479-20.89-37.375l-29.81-29.81c-11.743-11.743-24.145-18.612-37.205-20.607-13.06-1.993-24.635 2.052-34.722 12.139z" />
    </svg></a>


  </Layout>
)

export default IndexPage
