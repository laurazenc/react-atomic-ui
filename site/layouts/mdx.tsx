import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Page from "../src/components/page"
import LayoutComponents from "../src/components/LayoutComponents"
import sidebar from "routes"
import Sidebar from "components/sidebar/sidebar"

interface MDXI {
  frontmatter: { [key: string]: unknown }
  children: React.ReactNode
}

const MDXLayout: React.FC<MDXI> = ({ frontmatter, children }: MDXI) => {
  return (
    <MDXProvider components={{ ...LayoutComponents }}>
      <Page
        frontmatter={frontmatter}
        sidebar={<Sidebar routes={sidebar.routes} />}
      >
        {children}
      </Page>
    </MDXProvider>
  )
}

export default MDXLayout
