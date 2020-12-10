import React from "react"
import Helmet from "react-helmet"
import styled from "@emotion/styled"

import MapContainer from "./MapContainer"
import { menuId } from "../helpers/menuId"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  
`
const MapDiv = styled.div`
  width: 80%;
  max-width: 600px;
  min-height: 300px;
  position: relative;
  margin: 1rem 0;
`

const CenteredP = styled.p`
  text-align: center
`

const Contacto = ({ title, telefono, horario, picHeaderSet }) => {
  
  const structuredData = `{
      "@context": "https://schema.org",
      "@type": "Restaurant",
      image: [
        https://www.datocms-assets.com/38056/1606209439-20201028134228.jpg
      ],
      "@id": "http://niquelgustofino.com",
      name: "Niquel",
      address: {
        "@type": "PostalAddress",
        streetAddress: "c/ Ibiza 8. Mercado de Ibiza, puesto 27",
        addressLocality: "Madrid",
        addressRegion: "Madrid",
        postalCode: "28004",
        addressCountry: "ES",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 40.418015988501196, 
        longitude: -3.6774188950123596,
      },
      url: "http://niquelgustofino.com",
      telephone: "+34659055423",
      servesCuisine: "Tapas",
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "12:00",
          closes: "00:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "12:00",
          closes: "18:00",
        },
      ],
      acceptsReservations: "False",
    }`

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{structuredData}</script>
      </Helmet>

      <Section id={menuId(title)}>
        <h2>{title}</h2>
        <MapDiv>
          <MapContainer
            storeName="Niquel"
            location={[-3.6774188950123596, 40.418015988501196]}
            style={{ height: "100%", width: "100%" }}
          />
        </MapDiv>

        <CenteredP>
          c/ Ibiza 8, puesto 27 <br />
          Area Gastronómica del Mercado de Ibiza <br />
          28009, Madrid <br />
          <a href={telefono}>{telefono}</a> <br />
          <a href="mailto:contacto@niquelgustofino.com">
            contacto@niquelgustofino.com
          </a>
        </CenteredP>

        <h4>Horario</h4>
        <CenteredP>{horario}</CenteredP>
      </Section>
    </>
  )
}

export default Contacto
