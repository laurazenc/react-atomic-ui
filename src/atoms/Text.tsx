import styled, { DefaultTheme } from 'styled-components'

import PropTypes from 'prop-types'

import theme from '../core/theme'

interface TextProps {
    fontFamily?: string;
    theme: DefaultTheme;
}

const Text = styled.div<TextProps>`
    color: ${(props) => props.color};
`

Text.defaultProps = {
  theme,
  fontFamily: theme.fonts.fontFamily,
  color: 'green'
}

Text.propTypes = {
  theme: PropTypes.object,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
}

export default Text