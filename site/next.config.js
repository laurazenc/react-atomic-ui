const withPlugins = require("next-compose-plugins")
const withMdx = require("next-mdx-enhanced")

async function redirect() {
    return [
      {
        source: "/getting-started",
        destination: "/docs/getting-started",
        permanent: true,
      }
    ]
}

const bundleConfig = {
    target: "serverless",
    webpack: (config) => {
        return config
    },
    redirects: redirect()
  }

  function fileToPath(str) {
    return str.replace(".mdx", "").startsWith('/') ? str : `/${str}`;
  }

const mdxConfig = {
    layoutPath: "layouts",
    defaultLayout: true,
    fileExtensions: ["mdx"],
    extendFrontMatter: {
        process: async (_, frontmatter) => {
            const { __resourcePath: mdxPath } = frontmatter
            const slug = fileToPath(mdxPath)

            return {slug}
        }
    }
}

module.exports = withPlugins(
    [withMdx(mdxConfig)], bundleConfig
)