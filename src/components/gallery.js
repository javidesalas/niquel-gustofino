import React from "react"
import EmblaCarousel from "./emblaCarousel/emblaCarousel"


const Gallery = ({ title, gallery }) => {
  return (
    <section>
        <h2>{title}</h2>
      
        <EmblaCarousel gallery={gallery} />
    </section>
  )
}

export default Gallery
