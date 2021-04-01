import React from "react"
import { Box } from "@react-atomic-ui/components"

interface PageProps {
  frontmatter: { [key: string]: unknown }
  children: React.ReactNode
  sidebar?: React.ReactNode
  pagination?: unknown
}

const Page: React.FC<PageProps> = ({
  frontmatter,
  children,
  sidebar,
  pagination,
}: PageProps) => {
  const { title } = frontmatter
  return (
    <>
      <Box justifyContent="center" alignItems="center" height="60px">
        the header
      </Box>
      <div style={{ display: "flex" }}>
        {sidebar || null}
        <div style={{ flex: 1 }}>
          <h1>{title}</h1>
          {children}
          {pagination || null}
        </div>
      </div>
    </>
  )
}

export default Page
