const BABEL_ENV = process.env.BABEL_ENV
const isCommonJS = BABEL_ENV !== undefined && BABEL_ENV === "cjs"
const isESM = BABEL_ENV !== undefined && BABEL_ENV === "esm"

module.exports = function (api) {
  api.cache(true)

  const presets = [
    [
      "@babel/env",
      {
        loose: true,
        modules: isCommonJS ? "commonjs" : false,
        targets: {
          esmodules: isESM ? true : undefined,
        },
      },
    ],
    "@babel/preset-typescript",
    ["@babel/preset-react",       
    { "runtime": "automatic", "importSource": "@emotion/react" }
    ],
    "@emotion/babel-preset-css-prop"
  ]

  const plugins = [
    "@emotion/babel-plugin",
    "@babel/plugin-proposal-class-properties",
  ]

  return {
    presets,
    plugins,
  }
}