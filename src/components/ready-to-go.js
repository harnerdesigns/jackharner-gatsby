import { Link } from "gatsby";
import React from "react";

const ReadyToGo = () => {

    return (
        <section className="ready-to-go__wrapper half white grid grid--2 content--centered">
            <div className="ready-to-go__block">
                <Link to="/contact"></Link>
                <h2>Ready to go?</h2>
                <h3>&laquo; Let's Chat</h3>
            </div>
            <div className="ready-to-go__block">
            <Link to="/contact"></Link>
                <h2>Still Not Convinced?</h2>
                <h3>Let's Chat Anyway &raquo;</h3>
            </div>
        </section>
    )
}

export default ReadyToGo