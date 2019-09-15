import React from "react";
import { Component } from "react"



import shooluLogo from '../images/shoolu-logo.svg';
import materialLogo from '../images/material-color-logo-text.svg';
import bleedingLogo from '../images/BleedingCoffee-logo-white.svg';
import harnerDesignsLogo from '../images/harner-designs-white.svg';


class ProjectTabs extends Component {


    constructor(props) {

        super(props);

        this.state = { openTab: null };
    }


    onClick = (e) => {

        e.preventDefault();
        let target = e.target.getAttribute('data-target');
        if (this.state.openTab !== target) {

            this.setState({ openTab: e.target.getAttribute('data-target') })
        } else {

            this.setState({ openTab: null })
        }
    }


    render() {

        return (
            <container className="slim white">
                <h2>Recent Projects</h2>
                <div className={"things " + (this.state.openTab != null ? "is-open" : "")}>
                    <header className="things__tabs">
                        <div className={"thing " + (this.state.openTab === "#harnerdesigns-thing" ? "is-open" : "")} onClick={this.onClick} data-target="#harnerdesigns-thing" style={{ background: "#3e50b4" }}>
                            <a href="https://harnerdesigns.com" target="_blank" rel="noopener noreferrer"  aria-label="Harner Designs">
                                <img src={harnerDesignsLogo} data-target="#harnerdesigns-thing" alt="Harner Designs Logo"/>
                            </a>
                        </div> 
                        <div className={"thing " + (this.state.openTab === "#materialcolor-thing" ? "is-open" : "")} onClick={this.onClick} data-target="#materialcolor-thing" style={{ background: "#fff" }}>
                            <a href="https://materialcolor.xyz" target="_blank" rel="noopener noreferrer"  aria-label="Material Color">

                                <img src={materialLogo} data-target="#materialcolor-thing"  alt="Material Color Palette Logo"/>
                            </a>
                        </div>
                        <div className={"thing " + (this.state.openTab === "#shoolu-thing" ? "is-open" : "")} onClick={this.onClick} data-target="#shoolu-thing" style={{ background: "#0fb681" }}>
                            <a href="https://shoolu.com" target="_blank" rel="noopener noreferrer"  aria-label="Shoolu">
                                <img src={shooluLogo} data-target="#shoolu-thing" alt="Shoolu Logo" />
                            </a>
                        </div>


                        <div className={"thing " + (this.state.openTab === "#bleedingcoffee-thing" ? "is-open" : "")} onClick={this.onClick} data-target="#bleedingcoffee-thing" style={{ background: "#4b2c20" }}>
                            <a href="https://bleedingcoffee.com" target="_blank" rel="noopener noreferrer"  aria-label="Bleeding Coffee">
                                <img src={bleedingLogo} data-target="#bleedingcoffee-thing" alt="Bleeding Coffee Logo" />
                            </a>
                        </div>

                    </header>

                    <section className="things__body">
                        <div className={"content " + (this.state.openTab === "#harnerdesigns-thing" ? "is-open" : "")} id="harnerdesigns-thing">
                            <h3>Harner Designs</h3>
                            <p>This is the home of all of my Web Design / Development work and writing. It was born out of
                              nessecity for a portfolio website after I had lost the JackHarner.com domain. I'll save that
						story for another time.</p>
                            <div className="buttons"><a href="https://harnerdesigns.com" className="button button--large">Check Out My Work »</a>
                            </div>
                        </div>
                        <div className={"content " + (this.state.openTab === "#materialcolor-thing" ? "is-open" : "")} id="materialcolor-thing">
                            <h3>Material Color Palette</h3>
                            <p>A Chrome & Firefox extension I developed that puts the Material Design color codes right at your
                              fingertips. Click to copy HEX, #HEX, RGB, RGBA, HSL, & HSLA for whatever format color code you
						need.</p>
                            <p>I got tired of looking up the documentation every time I needed a color code. With over 1,700 weekly
                              users across both browsers, quick access to one of the most popular color palettes was needed.
					</p>
                            <div className="buttons"><a href="https://materialcolor.xyz" className="button button--large">Get The Extension »</a><a
                                href="https://github.com/harnerdesigns/material-color" className="button button--large">See The Code »</a>
                            </div>

                        </div>
                        <div className={"content " + (this.state.openTab === "#shoolu-thing" ? "is-open" : "")} id="shoolu-thing">
                            <h3>Shoolu</h3>
                            <p>Full disclosure: I currently work at Shoolu as the Marketing Director. My job is essentially
						anything and everything related to driving and converting traffic to the website.</p>
                            <p>This included maintaining and updating the website, developing internal and customer facing
                              tools, designing and developing email marketing campaigns, managing paid advertising campaigns,
						developing social media content and more.</p>
                            <div className="buttons"><a href="https://shoolu.com" className="button button--large">Check Out The Site »</a><a
                                href="https://harnerdesigns.com/clients/shoolu" className="button button--large">More Shoolu Projects »</a>
                            </div>

                        </div>
                        <div className={"content " + (this.state.openTab === "#bleedingcoffee-thing" ? "is-open" : "")} id="bleedingcoffee-thing">
                            <h3>Bleeding Coffee</h3>
                            <p>I like Coffee. A lot.</p>
                            <p>So I created a blog about coffee to help fund my caffeine addiction. Learn how to use a French
						Press, what all the different kinds of coffee drinks are and more!</p>
                            <div className="buttons"><a href="https://bleedingcoffee.com" className="button button--large">It's Coffee Time »</a>
                            </div>
                        </div>
                    </section>
                </div>
            </container>
        )
    }


}

export default ProjectTabs