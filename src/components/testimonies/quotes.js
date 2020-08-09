import React, { Component } from "react"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import defaultOGImage from '../../images/jackHarner-default-OG.jpg'
import QuoteCard from "./quote";

const Quotes = ({ quotes }) => {

    let quoteCards = quotes.map((quote) => <QuoteCard quote={quote} />)

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false
    };

    return (
        <Slider {...settings} className="quote__slider" >
            {quoteCards}
        </Slider>

    )


}

export default Quotes



