import React from "react"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import QuoteCard from "./quote";
import { Link } from "gatsby";

const Quotes = ({ quotes, seeMore }) => {

  let quoteCards = quotes?.map((quote) => <QuoteCard quote={quote} />)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: quotes.length > 3 ? 3 : quotes.length,
    slidesToScroll: quotes.length > 3 ? 3 : quotes.length,
    adaptiveWidth: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className="quote__slider" >
      {quoteCards}
      {seeMore && <div class="quote__card">
        <Link to={"/testimonials"}><h4>See More Testimonials &raquo;</h4></Link></div>}
    </Slider>

  )


}

export default Quotes



