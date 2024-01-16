import React from "react"
import QuoteCard from "./quote-big";

const Grid = ({ quotes }) => {
    let quoteCards = quotes?.map((quote) => <QuoteCard quote={quote} />)

    return(
        <section className="quotes-grid__wrapper">
        {quoteCards}
        </section>
    )

}

export default Grid