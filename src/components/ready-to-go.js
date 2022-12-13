import { Link } from "gatsby";
import React from "react";

const ReadyToGo = () => {

    return (
        <section className="half white grid grid--2 content--centered">
            <div>
                <h2>Ready to go?</h2>
                <Link to="/contact"><h3>&laquo; Let's Chat</h3></Link>
            </div>
            <div>
                <h2>Still Not Convinced?</h2>
                <Link to="/contact"><h3>Let's Chat Anyway &raquo;</h3></Link>
            </div>
        </section>
    )
}

export default ReadyToGo