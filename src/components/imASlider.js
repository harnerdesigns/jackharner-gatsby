import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Component } from "react"


class ImASlider extends Component {

    constructor(props) {

        super(props);
        this.state = {
            currentTitle: "Web Developer",
            titles: ["Web Developer", "Problem Solver", "Photographer", "Graphic Designer", "Cat Lover", "Entrepreneur"]
        }
        this.loop = this.loop.bind(this);
    }



    loop() {

        let { titles, currentTitle } = this.state;

        let currentIndex = titles.indexOf(currentTitle);
        let newIndex;

        if (currentIndex < 5) {

             newIndex = currentIndex + 1;
        } else {

             newIndex = 0;

        }
        this.setState({ currentTitle: titles[newIndex] });


        return


    }


    componentDidMount() {
        this.interval = setInterval(()=>{this.loop()}, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }



    render() {
        return (

            <>
                <h3>I'm <span id="a">a</span> <span class="title__box">
                    <span class="title" data-splitting="">{this.state.currentTitle}</span>
                </span>.</h3>

            </>
        )
    }


}

export default ImASlider
