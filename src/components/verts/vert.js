import React from "react"

const Vert = ({ link, slug, children, image, buttonText }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className={`vert vert--${slug} vert--${
        image ? "with-icon" : "withoug-icon"
      }`}
    >
      <div className="vert__content">{children}</div>
      {image && (
        <div className="vert__img-wrap">
          <img src={image} />
        </div>
      )}

      {buttonText && <a className="button">{buttonText}</a>}
    </a>
  )
}

export default Vert
