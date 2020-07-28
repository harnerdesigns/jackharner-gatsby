import React, {Component} from "react"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import defaultOGImage from '../../images/jackHarner-default-OG.jpg'



export default class ShareLinks extends Component{ 

    constructor(props){
        super(props);
        this.post = props.post;
    }
    
    render(){
        let postPermalink = "https://jackharner.com" + this.post.fields.slug;
        let postImage = "https://jackharner.com" + (this.post.frontmatter.featuredImage ? this.post.frontmatter.featuredImage.childImageSharp.sizes.src : defaultOGImage)
        return(


    <aside className="share-buttons">
        <h4 className="shareThis"><FontAwesomeIcon icon="share-alt"/>&nbsp;Share This Post:</h4>

        <a href={"https://www.facebook.com/sharer/sharer.php?u=" + postPermalink}
            className="share-button facebook"
            target="_blank" rel="noopener noreferrer" title={"Share "+this.post.frontmatter.title+" on Facebook"} alt={"Share "+this.post.frontmatter.title+" on Facebook"}><FontAwesomeIcon icon={["fab", "facebook"]} /> Facebook</a>


        <a href={"https://twitter.com/intent/tweet?url=" + postPermalink + "&text="+this.post.frontmatter.title+"&via=jackharner"}
            className="share-button twitter" title={"Share "+this.post.frontmatter.title+" on Twitter"} alt={"Share "+this.post.frontmatter.title+" on Twitter"}
            target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "twitter"]} /> Twitter</a>

        <a href={"https://pinterest.com/pin/create/button/?url="+postPermalink+"&description="+this.post.frontmatter.title+"%20-%20Jack%20Harner&media="+postImage}
            className="share-button pinterest" title={"Share "+this.post.frontmatter.title+" on Pinterest"}
            target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "pinterest"]} /> Pinterest</a>

        <a href={"https://tumblr.com/widgets/share/tool?canonicalUrl="+postPermalink+"&tags=HarnerDesigns&caption="+this.post.frontmatter.title+"%20-%20Jack%20Harner"}
            className="share-button tumblr" title={"Share "+this.post.frontmatter.title+" on Tumblr"}
            target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "tumblr"]} /> Tumblr</a>

        <a href={"https://reddit.com/submit?url="+postPermalink+"&title="+this.post.frontmatter.title+"%20-%20Jack%20Harner&resubmit=true"}
            className="share-button reddit" title={"Share "+this.post.frontmatter.title+" on Reddit"}
            target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "reddit"]} /> Reddit</a>
    </aside>
)}}
