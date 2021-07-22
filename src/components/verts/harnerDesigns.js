import React, { useState, useEffect } from "react"
import Vert from "./vert"

import Button from "../atoms/button"
import Loader from "../atoms/loader"

const fetchData = async url => {
  const resp = await fetch(url).then(response => response.json())
  return resp
}

const formatTitle = (str) => {
    let newString = String(str).replace("&#8217;", '\'');
    return newString;
}

const chopTitle = str =>{
    let newString = str;
    if(newString.length > 30){
        newString = newString.slice(0, 19) + "..." + newString.slice(newString.length - 10, newString.length);
    }
    return newString;
}

const shuffle = array => {
  var currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

const HarnerDesigns = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchData("https://harnerdesigns.com/wp-json/wp/v2/product").then(data => {
      console.log(data)
      shuffle(data).forEach(product => {
        let newProduct = {
          link: product.link,
          image: product.featured_media,
          title: product.title.rendered,
        }
        setProducts(currentArray => [...currentArray, newProduct])
      })
    })
  }, [])

  const productsMap = products.map((product, i) => {
    if (i > 5) return
    return <ProductCard product={product} />
  })
  return (
    <Vert slug="moreWithLess">
      <h2>Prints, Shirts, & Mugs, OH MY!</h2>
      <h3>Help support my content by getting yourself something to wear, drink out of, or stare at. Thanks love u.</h3>
      <div class="product-grid">{products.length ? productsMap : ""}
      <Button
        icon="shopping-bag"
        label={"Shop Now &raquo;"}
        href="https://harnerdesigns.com/shop"
        />
        </div>
    </Vert>
  )
}

export default HarnerDesigns

const ProductCard = ({ product }) => {

  return (
    <a className="product__image-wrapper" target="_blank"
    rel="noopener noreferrer" href={product.link} title={formatTitle(product.title)}>
      {product.image ? <img  className="product__image" src={"https://harnerdesigns.com/?attachment_id=" + product.image} alt={product.title} /> : <Loader />}
      <span className="product__title" title={formatTitle(product.title)}>{chopTitle(formatTitle(product.title))}</span>
    </a>
  )
}
