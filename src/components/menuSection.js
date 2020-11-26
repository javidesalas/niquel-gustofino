import React from "react"
import Image from "gatsby-image"

const menuSection = ({ picture, title, text, linkText, linkUrl }) => {
  return (
    <section>
      <Image fixed={picture} />

      <h2>{title}</h2>
      <p>{text}</p>
      <a href={linkUrl}>{linkText}</a>
      
    </section>
  )
}

export default menuSection
