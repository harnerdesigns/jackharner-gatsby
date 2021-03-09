import React from "react"

const Vert = ({ link, slug, children, image, buttonText }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener"
      className={`vert vert--${slug} vert--${
        image ? "with-icon" : "without-icon"
      }`}
    >
      <div className="vert__content">{children}</div>
      {image && (
        <div className="vert__img-wrap">
          <img src={image} />
        </div>
      )}

      {buttonText && <button className="button">{buttonText}</button>}
    </a>
  )
}

export default Vert
