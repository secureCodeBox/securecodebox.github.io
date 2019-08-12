import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"


export default ({ data }) => (
    <Layout>
        <h1>About {data.site.siteMetadata.title}</h1>
        <h2>It's pretty cool</h2>
        <p>Such wow. Very React.</p>
    </Layout>
)
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
