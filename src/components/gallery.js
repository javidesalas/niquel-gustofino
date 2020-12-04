import React from "react"
import EmblaCarousel from "./emblaCarousel/emblaCarousel"
import {menuId} from '../helpers/menuId'


const Gallery = ({ title, gallery }) => {
  return (
    <section id={menuId(title)}>
      <h2 style={{ paddingLeft: "1rem" }}>{title}</h2>
      <EmblaCarousel gallery={gallery} />
    </section>
  )
}

export default Gallery
