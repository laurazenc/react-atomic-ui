import styled, { DefaultTheme } from 'styled-components'
import PropTypes from 'prop-types'

import theme from '../core/theme'

const directions = ["row", "column", "row-reverse", "column-reverse"]
const wraps = ["no-wrap", "wrap", "wrap-reverse"]
const justifies = ["flex-start" , "flex-end" , "center" , "space-between" , "space-around" , "space-evenly" , "start" , "end" , "left" , "right"]


interface FlexProps {
    theme: DefaultTheme;
    flexDirection?: string;
    flexWrap?: string;
    justifyContent?: string;
}

const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${props => props.flexDirection};
    flex-wrap: ${props => props.flexWrap};
    justify-content: ${props => props.justifyContent};
`

Flex.defaultProps = {
  theme,
  flexDirection: directions[0],
  flexWrap: wraps[0],
  justifyContent: justifies[0]
}

Flex.propTypes = {
  theme: PropTypes.object,
  flexDirection: PropTypes.oneOf(directions),
  flexWrap: PropTypes.oneOf(wraps),
  justifyContent: PropTypes.oneOf(justifies),
}

export default Flex