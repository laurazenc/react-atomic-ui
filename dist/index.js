"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var n=e(require("styled-components")),r=e(require("prop-types")),t={colors:{primary:"#28D6D6",secondary:"#7673F6",error:"#FF6857",warning:"#F7BA15",info:"#8581D9",success:"#038A63",dark:{alpha:"#000C36",beta:"#48506A",gamma:"#858CA3",delta:"#D5D9E8"}},fonts:{fontFamily:'"-apple-system", "system-ui"'},responsive:{breakpoints:{xl:1920,lg:1280,md:960,sm:600}}};
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
function o(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}var i,s=n.div(i||(i=o(["\n    color: ",";\n"],["\n    color: ",";\n"])),(function(e){return e.color}));s.defaultProps={theme:t,fontFamily:t.fonts.fontFamily,color:"green"},s.propTypes={theme:r.object,color:r.string,fontFamily:r.string};var a,p=n.div(a||(a=o(["\n    width: 100%;\n    ","\n"],["\n    width: 100%;\n    ","\n"])),(function(e){var n=e.theme;return"\n      @media (min-width: "+n.responsive.breakPoints.xl+") {\n        max-width: "+n.responsive.breakPoints.xl+";\n      }\n      @media (min-width: "+n.responsive.breakPoints.lg+") and (max-width: "+n.responsive.breakPoints.xl+") {\n        max-width: "+n.responsive.breakPoints.lg+";\n      }\n      @media (min-width: "+n.responsive.breakPoints.md+") and (max-width: "+n.responsive.breakPoints.lg+") {\n        max-width: "+n.responsive.breakPoints.md+";\n      }\n      @media (max-width: "+n.responsive.breakPoints.md+") {\n        max-width: "+n.responsive.breakPoints.sm+";\n      }\n    "}));p.defaultProps={theme:t},p.propTypes={theme:r.object},exports.Responsive=p,exports.Text=s,exports.theme=t;
//# sourceMappingURL=index.js.map
