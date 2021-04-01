import * as CSS from "csstype"

export interface FlexProps {
  alignItems?: CSS.Property.AlignItems
  justifyContent?: CSS.Property.JustifyContent
  flexWrap?: CSS.Property.FlexWrap
  flexDirection?: CSS.Property.FlexDirection
  flexBsis?: CSS.Property.FlexBasis
  flexGrow?: CSS.Property.FlexGrow
  flexShrink?: CSS.Property.FlexShrink
}

export interface SizeProps {
  width?: CSS.Property.Width
  height?: CSS.Property.Height
}
