import React from "react"
import { Dict } from "@react-atomic-ui/utils"

interface RauiProviderProps {
  theme?: Dict
  children?: React.ReactNode
}

const ThemeContext = React.createContext<Record<string, unknown>>({})
const ThemeProvider = ThemeContext.Provider

export const RauiProvider = ({
  children,
  theme,
}: RauiProviderProps): React.ReactElement => {
  return <ThemeProvider value={theme || {}}>{children}</ThemeProvider>
}

export function useTheme<T extends Record<string, unknown> = Dict>(): Dict {
  const theme = React.useContext(
    (ThemeContext as unknown) as React.Context<T | Dict>,
  )

  const result = React.useMemo(() => theme, [theme])

  return result
}
