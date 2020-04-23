import styled from 'styled-components'
import PropTypes from 'prop-types'

import theme from '../core/theme'

const Responsive = styled.div`
    width: 100%;
    ${({theme}) => `
      @media (min-width: ${theme.responsive.breakPoints.xl}) {
        max-width: ${theme.responsive.breakPoints.xl};
      }
      @media (min-width: ${theme.responsive.breakPoints.lg}) and (max-width: ${theme.responsive.breakPoints.xl}) {
        max-width: ${theme.responsive.breakPoints.lg};
      }
      @media (min-width: ${theme.responsive.breakPoints.md}) and (max-width: ${theme.responsive.breakPoints.lg}) {
        max-width: ${theme.responsive.breakPoints.md};
      }
      @media (max-width: ${theme.responsive.breakPoints.md}) {
        max-width: ${theme.responsive.breakPoints.sm};
      }
    `}
`

Responsive.defaultProps = {
  theme
}

Responsive.propTypes = {
  theme: PropTypes.object,
}

export default Responsive