import React from 'react'

interface PageProps {
    frontmatter: unknown,
    children: React.ReactNode,
    sidebar?: React.ReactNode,
    pagination?: unknown
}

const Page: React.FC<PageProps> = ({
    children,
    sidebar,
    pagination,
  }: PageProps) => {
      return (
          <>
                {sidebar || null}
                <div style={{ flex: 1 }}>
                    {children}
                    {pagination || null}
                </div>
          </>
      )

  }

  export default Page
