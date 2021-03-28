import React from "react"






const QuoteCard = ({ quote }) => {

    return (
        <div class="quote__card">
            <h2 className={"quote__quote " + (quote.quote.length > 40 ? "quote--long" : "")}>"{quote.quote}"</h2>
            <a href={quote.link} ><h3 className="quote__by">-{quote.by}</h3></a>
        </div>

    )


}

export default QuoteCard



