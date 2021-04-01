/** @jsx jsx */
import { jsx } from "@emotion/react"
import { css, raui } from "@react-atomic-ui/theme"
import React from "react"
import { FlexProps, SizeProps } from "./config"

const StyledBox = raui.div``

interface BoxProps extends FlexProps, SizeProps {}

export const Box: React.FunctionComponent<BoxProps> = (props) => {
  const { children, ...rest } = props

  const styleCss = css({
    display: "flex",
    ...rest,
  })

  return <StyledBox css={styleCss}>{children}</StyledBox>
}

const StyledFlex = raui(StyledBox)``

export const Row: React.FunctionComponent<BoxProps> = (props) => {
  const { children, ...rest } = props

  const styleCss = css({
    display: "flex",
    flexDirection: "row",
    ...rest,
  })

  return <StyledFlex css={styleCss}>{children}</StyledFlex>
}
