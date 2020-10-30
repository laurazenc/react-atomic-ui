import * as React from "react"
import Page from "../src/components/page"
import dynamic from "next/dynamic"

const MDXLayout = dynamic(() => import("./mdx"))

export default function DefaultLayout({ children, frontMatter }) {
  const { slug } = frontMatter

  if (slug.startsWith("/guides") || slug.startsWith("/docs")) {
    return <MDXLayout frontmatter={frontMatter}>{children}</MDXLayout>
  }

  return <Page frontmatter={frontMatter}>{children}</Page>
}