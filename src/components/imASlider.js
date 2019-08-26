import React from "react"
import { Component } from "react"


class ImASlider extends Component {

    constructor(props) {

        super(props);
        this.state = {
            typedTitle: "",
            currentTitle: "",
            titleQuantifier: "a",
            titles: ["Web Developer", "Problem Solver", "Photographer", "Graphic Designer", "Cat Lover", "Entrepreneur"],
            typingSpeed: 50
        }
        this.loop = this.loop.bind(this);
    }

    isVowel(term){

        let firstLetter = term.slice(0,1);

        var result;

        result = firstLetter == "A" || firstLetter == "E" || firstLetter == "I" || firstLetter == "O" || firstLetter == "U";
        return result;
    }

    addLetter = (letter) =>{

        this.setState({typedTitle: this.state.typedTitle + letter})
    }

    removeLetter = () =>{

        this.setState({typedTitle: this.state.typedTitle.slice(0, -1)})
    }

    removeWord = ( numberOfLetters ) => {



        while(numberOfLetters > 0){

            this.timeout = setTimeout(() => {
                //search function
                this.removeLetter();
            }, this.state.typingSpeed * numberOfLetters);

            numberOfLetters--;
        }
    } 

    addWord = ( word ) => {

        let letters = word.split("");
        letters.forEach((letter, i ) => {

            this.timeout2 = setTimeout(() => {
                //search function
                this.addLetter(letter)
            }, this.state.typingSpeed * i);



        });

        this.timeout3 = setTimeout(() => {
            //search function
            this.removeWord(this.state.typedTitle.length)
          }, 1500);


    }


    


    loop = () => {

        let { titles, currentTitle } = this.state;

        let currentIndex = titles.indexOf(currentTitle);
        let newIndex;

        if (currentIndex < 5) {

             newIndex = currentIndex + 1;
        } else {

             newIndex = 0; 

        }
        this.setState({ currentTitle: titles[newIndex], titleQuantifier: (this.isVowel(titles[newIndex]) ? "an" : "a") });

        this.addWord( this.state.currentTitle );


        return


    }


    componentDidMount() {
        this.interval = setInterval(()=>{this.loop()}, 
        3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        clearTimeout(this.timeout);
        clearTimeout(this.timeout2);
        clearTimeout(this.timeout3);
    }



    render() {
        return (

            <>
                <h3>I'm <span id="a">{this.state.titleQuantifier}</span> <span class="title__box">
                    <span class="title">{this.state.typedTitle}</span>
                </span>.</h3>

            </>
        )
    }


}

export default ImASlider
