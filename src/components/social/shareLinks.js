import PropTypes from "prop-types"
import React from "react"

import { Link } from "gatsby"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"


const ShareLinks = ({ post }) => (

    <aside class="share-buttons">
        <h4 class="shareThis"><FontAwesomeIcon icon="share-alt"/>&nbsp;Share This Post:</h4>

        <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $url ?>"
            class="share-button facebook"
            target="_blank" title="Share ${title} on Facebook" alt="Share ${title} on Facebook"><i class="fab fa-facebook-f"></i></a>


        <a href="https://twitter.com/intent/tweet?url=<?php echo $url ?>&text=${title}&via=harnerdesigns&hashtags=HarnerDesigns"
            class="share-button twitter" title="Share ${title} on Twitter" alt="Share ${title} on Twitter"
            target="_blank"><i class="fab fa-twitter"></i></a>

        <a href="https://pinterest.com/pin/create/button/?url=<?php echo $url ?>&description=${title}%20-%20Harner%20Designs&media=<?php echo $imageUrl; ?>"
            class="share-button pinterest" title="Share ${title} on Pinterest"
            target="_blank"><i class="fab fa-pinterest"></i></a>

        <a href="https://tumblr.com/widgets/share/tool?canonicalUrl=<?php echo $url; ?>&tags=HarnerDesigns&caption=${title}%20-%20Harner%20Designs"
            class="share-button tumblr" title="Share ${title} on Tumblr"
            target="_blank"><i class="fab fa-tumblr"></i></a>

        <a href="https://reddit.com/submit?url=<?php echo $url; ?>&title=${title}%20-%20Harner%20Designs&resubmit=true"
            class="share-button reddit" title="Share ${title} on Reddit"
            target="_blank"><i class="fab fa-reddit"></i></a>
    </aside>
)

ShareLinks.propTypes = {
}

ShareLinks.defaultProps = {
    
}

export default ShareLinks