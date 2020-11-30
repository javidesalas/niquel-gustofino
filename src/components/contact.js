import React from 'react';
import Helmet from 'react-helmet'
import MapContainer from './MapContainer'


const Contacto = ({ titleContacto, telefono, horario, picHeaderSet }) => {

    console.log(picHeaderSet)
    
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
      telephone: "+34605806003",
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

      <section>
        <h2>{titleContacto}</h2>
        <div style={{ width:"100px", minHeight:"300px", overflow: "hidden"}}>
          <MapContainer />
        </div>

        <p>
          c/ Ibiza 8, puesto 27 <br />
          Area Gastronómica del Mercado de Ibiza <br />
          28009, Madrid <br />
          <a href={telefono}>{telefono}</a> <br />
          <a href="mailto:hola@niquelgustofino.com">hola@niquelgustofino.com</a>
        </p>

        <h4>Horario</h4>
        <p>{horario}</p>
      </section>
    </>
  )
}

export default Contacto