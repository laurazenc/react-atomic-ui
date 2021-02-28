import { Dict } from "@react-atomic-ui/utils"
import React from "react"
import { ThemeContext } from "."

export function useTheme(): Dict {
  const theme = React.useContext(ThemeContext) as Dict
  if (!theme) {
    throw new Error(
      "useTheme: Context not found. Wrap your app within `<RauiProvider />`",
    )
  }

  const result = React.useMemo(() => theme, [theme])
  return result
}
