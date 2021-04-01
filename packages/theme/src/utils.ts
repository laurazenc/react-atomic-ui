import { css } from "@emotion/react"

export const getStyles = (props: Record<string, any>) => {
  const { children, ...styles } = props
  return css(styles)
}
