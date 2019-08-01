import React from "react"
import { Component } from "react"


class ImASlider extends Component {

    constructor(props) {

        super(props);
        this.state = {
            currentTitle: "Web Developer",
            titleQuantifier: "a",
            titles: ["Web Developer", "Problem Solver", "Photographer", "Graphic Designer", "Cat Lover", "Entrepreneur"]
        }
        this.loop = this.loop.bind(this);
    }

    isVowel(term){

        let firstLetter = term.slice(0,1);

        var result;

        result = firstLetter == "A" || firstLetter == "E" || firstLetter == "I" || firstLetter == "O" || firstLetter == "U";
        return result;
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
        this.setState({ currentTitle: titles[newIndex], titleQuantifier: (this.isVowel(titles[newIndex]) ? "an" : "a") });


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
                <h3>I'm <span id="a">{this.state.titleQuantifier}</span> <span class="title__box">
                    <span class="title" data-splitting="">{this.state.currentTitle}</span>
                </span>.</h3>

            </>
        )
    }


}

export default ImASlider
