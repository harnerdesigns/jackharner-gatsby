import React from "react"
import { Link } from "gatsby"

import tagIcons from "../../templates/tags/tag-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const _ = require("lodash")


const TopTags = ({topTags = [], postType = null, back=false, exclude=null}) => {

    const postTypeLabels =
      postType === "portfolio"
        ? { single: "Project", plural: "Projects", type: "Project" }
        : { single: "Blog Post", plural: "Blog Posts", type: "Blog" };


       if(exclude != null && topTags.indexOf(exclude) > -1){ topTags.splice(topTags.indexOf(exclude), 1) } 




    return(
        <div className="top-tags">
            {back &&
            <Link to={`/${postType}`} style={{ margin: "0 auto 0 0.5em" }}>
            &laquo; Back to All {postTypeLabels.plural}
          </Link>}
          <ul>
            <li>
              Top&nbsp;<Link to={`/${postType}/tags`}>{postTypeLabels.single}&nbsp;Tags</Link>:
            </li>
            {topTags && topTags.map((tag, i) => {
              const tagLink = `/${postType}/tags/${_.kebabCase(tag)}/`
              if (i < 6 && tag !== exclude) {
                return (
                  <li>
                    <Link to={tagLink}>
                      <FontAwesomeIcon fixedWidth icon={tagIcons[tag]} />
                      &nbsp;
                      {tag}
                    </Link>
                  </li>
                )
              }
            })}
          </ul>
        </div>
    )
}

export default TopTags;