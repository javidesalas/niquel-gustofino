import React, { useState, useEffect, useCallback } from "react"
import { PrevButton, NextButton } from "./emblaCarouselButtons"
import { useEmblaCarousel } from "embla-carousel/react"
import Image from "gatsby-image"

import "./embla.css"

const EmblaCarousel = ({ gallery }) => {
  
  const [viewportRef, embla] = useEmblaCarousel({ loop: true })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const onSelect = useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla])

  useEffect(() => {
    if (!embla) return
    embla.on("select", onSelect)
    onSelect()
  }, [embla, onSelect])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {gallery.map((picture, index) => {
            return (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  <Image
                    className="embla__slide__img"
                    fixed={picture.fixed}
                    alt="Platos"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  )
}

export default EmblaCarousel
