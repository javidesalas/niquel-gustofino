import React from "react"

import Layout from "../components/layout"
import useContent from "../hooks/use-content"
import SEO from "../components/seo"
import Homepage from "../components/homepage"

const IndexPage = () => {
  const content = useContent("ES")

  console.log("En Index", content)

  return (
    <Layout>
      <SEO />
      <Homepage content={content} />
    </Layout>
  )
}

export default IndexPage
