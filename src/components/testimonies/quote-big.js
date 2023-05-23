import React from "react"

const QuoteCard = ({ quote }) => {

    return (
        <div class="quote__card quote__card--large">
            <h3 className={"quote__quote " + (quote.quote.length > 40 ? "quote--long" : "")}>"{quote.quote}"</h3>
            <div>
                <a href={quote.link} target="_blank" ><h3 className="quote__by">{quote.by}</h3></a>
                {quote.title && <h4 className="quote__title">{quote.title}</h4>}
            </div>
        </div>

    )


}

export default QuoteCard



