import React from "react"
import Loadable from "@loadable/component"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AdminComponent = Loadable(() => import("../components/AdminComponent"), {
  fallback: <></>,
})

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AdminComponent />
  </Layout>
)

export default IndexPage
