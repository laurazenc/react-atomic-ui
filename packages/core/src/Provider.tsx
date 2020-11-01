import React from "react"
import { Dict } from "@react-atomic-ui/utils"
import defaultTheme from "@react-atomic-ui/theme"

interface RauiProviderProps {
  theme?: Dict
  children?: React.ReactNode
}

const ThemeContext = React.createContext<Record<string, unknown>>({})

export interface ThemeProviderProps {
  theme: Dict
}

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = (
  props,
) => {
  const { children, theme } = props
  const mergedTheme = Object.assign({}, defaultTheme, theme)
  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  )
}

export const RauiProvider = ({
  children,
  theme = defaultTheme,
}: RauiProviderProps): React.ReactElement => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export function useTheme(): Dict {
  const theme = React.useContext(ThemeContext) as Dict
  const result = React.useMemo(() => theme, [theme])
  return result
}
