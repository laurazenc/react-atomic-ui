import { DefaultTheme } from 'styled-components'

import colors, { ColorProps } from './colors'
import fonts, { FontsProps } from './fonts'

interface BreakPointsProps {
  xl: number;
  lg: number;
  md: number;
  sm: number;
}

interface ResponsiveProps {
  breakpoints: BreakPointsProps;
}


export interface ThemeProps extends DefaultTheme {
  fonts: FontsProps;
  colors: ColorProps;
  responsive: ResponsiveProps;
}


const theme: ThemeProps = {
  colors,
  fonts,
  responsive: {
      breakpoints: {
          xl: 1920,
          lg: 1280,
          md: 960,
          sm: 600
      }
  }
}

export default theme