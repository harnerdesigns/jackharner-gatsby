import React, { Component } from "react"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import defaultOGImage from '../../images/jackHarner-default-OG.jpg'

const QuoteCard = ({ quote }) => {

    return (
        <div class="quote__card">
            <h2 className="quote__quote">"{quote.quote}"</h2>
            <h3 className="quote__by">-{quote.by}</h3>
        </div>

    )


}

export default QuoteCard



