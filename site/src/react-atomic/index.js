/* eslint-disable */
import styled from 'styled-components';
import PropTypes from 'prop-types';

var colors = {
    primary: "#28D6D6",
    secondary: "#7673F6",
    error: "#FF6857",
    warning: "#F7BA15",
    info: "#8581D9",
    success: "#038A63",
    dark: {
        alpha: "#000C36",
        beta: "#48506A",
        gamma: "#858CA3",
        delta: "#D5D9E8"
    }
};

var fonts = {
    fontFamily: '"-apple-system", "system-ui"',
};

var theme = {
    colors: colors,
    fonts: fonts,
    responsive: {
        breakpoints: {
            xl: 1920,
            lg: 1280,
            md: 960,
            sm: 600
        }
    }
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Responsive = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    ", "\n"], ["\n    width: 100%;\n    ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return "\n      @media (min-width: " + theme.responsive.breakPoints.xl + ") {\n        max-width: " + theme.responsive.breakPoints.xl + ";\n      }\n      @media (min-width: " + theme.responsive.breakPoints.lg + ") and (max-width: " + theme.responsive.breakPoints.xl + ") {\n        max-width: " + theme.responsive.breakPoints.lg + ";\n      }\n      @media (min-width: " + theme.responsive.breakPoints.md + ") and (max-width: " + theme.responsive.breakPoints.lg + ") {\n        max-width: " + theme.responsive.breakPoints.md + ";\n      }\n      @media (max-width: " + theme.responsive.breakPoints.md + ") {\n        max-width: " + theme.responsive.breakPoints.sm + ";\n      }\n    ";
});
Responsive.defaultProps = {
    theme: theme
};
Responsive.propTypes = {
    theme: PropTypes.object,
};
var templateObject_1;

var Text = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    color: ", ";\n"], ["\n    color: ", ";\n"])), function (props) { return props.color; });
Text.defaultProps = {
    theme: theme,
    fontFamily: theme.fonts.fontFamily,
    color: 'green'
};
Text.propTypes = {
    theme: PropTypes.object,
    color: PropTypes.string,
    fontFamily: PropTypes.string,
};
var templateObject_1$1;

var directions = ["row", "column", "row-reverse", "column-reverse"];
var wraps = ["no-wrap", "wrap", "wrap-reverse"];
var justifies = ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly", "start", "end", "left", "right"];
var Flex = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: ", ";\n    flex-wrap: ", ";\n    justify-content: ", ";\n"], ["\n    display: flex;\n    flex-direction: ", ";\n    flex-wrap: ", ";\n    justify-content: ", ";\n"])), function (props) { return props.flexDirection; }, function (props) { return props.flexWrap; }, function (props) { return props.justifyContent; });
Flex.defaultProps = {
    theme: theme,
    flexDirection: directions[0],
    flexWrap: wraps[0],
    justifyContent: justifies[0]
};
Flex.propTypes = {
    theme: PropTypes.object,
    flexDirection: PropTypes.oneOf(directions),
    flexWrap: PropTypes.oneOf(wraps),
    justifyContent: PropTypes.oneOf(justifies),
};
var templateObject_1$2;

export { Flex, Responsive, Text, theme };
