import React from "react"

import Layout from "../components/layout"
import useContent from "../hooks/use-content"

import SEO from "../components/seo"
import Homepage from "../components/homepage"



const IndexPage = () => {
    const content = useContent("ES")
    
    const menuItems = [
        content.titleContacto,
        content.titleAbout,
        content.subtComer,
        content.subtBeber,
        content.subtCelebrar,
      content.titleGaleria,
        "Reservas"
    ]

    return (

      <Layout lang="ES" menuItems={menuItems}>
        <SEO title="Niquel" />
        <Homepage content={content} />
      </Layout>

  )
}

export default IndexPage
