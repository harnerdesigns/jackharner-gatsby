import React from "react"
import QuoteCard from "./quote-big";

const Grid = ({ quotes }) => {

        console.log({quotes})
    let quoteCards = quotes?.map((quote) => <QuoteCard quote={quote} />)

    return(
        <section className="quotes-grid__wrapper">
        {quoteCards}
        </section>
    )

}

export default Grid