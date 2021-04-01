/** @jsx jsx */
import { jsx, css } from "@emotion/react"

import React from "react"
import { raui } from "@react-atomic-ui/theme"
import { TextProps } from "./config"

const StyledText = raui.div``

export const Text: React.FunctionComponent<TextProps> = ({
  children,
  ...style
}) => {
  const styleCss = css(style as Record<string, string | number>)

  return <StyledText css={styleCss}>{children}</StyledText>
}
