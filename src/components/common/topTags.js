import React from "react"
import { Link } from "gatsby"

import tagIcons from "../../templates/tags/tag-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const _ = require("lodash")


const TopTags = ({ topTags = [], postType = null, back = false, exclude = null, limit = 6 }) => {

  const postTypeLabels =
    postType === "portfolio"
      ? { single: "Project", plural: "Projects", type: "Project" }
      : { single: "Blog", plural: "Blog", type: "Blog" };


  if (exclude != null && topTags.indexOf(exclude) > -1) { topTags.splice(topTags.indexOf(exclude), 1) }




  return (
    <div className="top-tags">
      <ul>
      {back &&
      <li className="more-tags">
        <Link to={`/${postType}`} style={{ margin: "0 auto 0 0.5em" }}>
        <FontAwesomeIcon fixedWidth icon='arrow-left' />

          Back to {postTypeLabels.plural}
        </Link></li>}
        {topTags && topTags.map((tag, i) => {
          const tagLink = `/${postType}/tags/${_.kebabCase(tag)}/`
          if (i < limit && tag !== exclude) {
            return (
              <li className="top-tag" key={i}>
                <Link to={tagLink}>
                  <FontAwesomeIcon fixedWidth icon={tagIcons[tag]} />
                      &nbsp;
                      {tag}
                </Link>
              </li>
            )
          }
        })}
        <li className="more-tags">

          <Link to={`/${postType}/tags`}>
            <FontAwesomeIcon fixedWidth icon='ellipsis-h' />
            {postTypeLabels.single}&nbsp;Tags
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default TopTags;