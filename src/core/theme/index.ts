import { DefaultTheme } from 'styled-components'

import colors from './colors'

const theme: DefaultTheme = {
  colors,
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