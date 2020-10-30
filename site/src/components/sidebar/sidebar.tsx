import React from "react"
import { useRouter } from "next/router"

interface Route {
  title: string
  path?: string
  routes?: Route[]
  heading?: boolean
}

interface SidebarProps {
  routes: Route[]
}

const Sidebar: React.FC<SidebarProps> = ({ routes }: SidebarProps) => {
  const { pathname } = useRouter()
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <div ref={ref}>
      {routes.map((c1, idx) => {
        return (
          <React.Fragment key={idx}>
            {c1.heading && <h4>{c1.title}</h4>}
            {c1.routes.map((c2) => {
              if (!c2.routes) {
                return (
                  <a key={c2.path} href={c2.path}>
                    {c2.title}
                  </a>
                )
              }
              return (
                <div key={c2.path} {...c2}>
                  <div>
                    {c2.routes.map((c3) => (
                      <a key={c3.path} href={c3.path}>
                        {c3.title}
                      </a>
                    ))}
                  </div>
                </div>
              )
            })}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Sidebar
