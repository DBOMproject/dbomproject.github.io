/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `DBoM - Standardizing Attestation Sharing`,
        description: `The Digital Bill of Materials (DBoM) provides the missing layer for  policy controlled attestation sharing between organizations.`,
        author: `@dbomproject`,
        siteUrl: `https://dbom.io`,
    },
    plugins: [
        `gatsby-plugin-image`,
        {
            resolve: '@chakra-ui/gatsby-plugin',
            options: {
                /**
                 * @property {boolean} [resetCSS=true]
                 * if false, this plugin will not use `<CSSReset />
                 */
                resetCSS: true,
                /**
                 * @property {boolean} [isUsingColorMode=true]
                 * if false, this plugin will not use <ColorModeProvider />
                 */
                isUsingColorMode: true,
                /**
                 * @property {boolean} [isBaseProvider=false]
                 * if true, will render `<ChakraBaseProvider>`
                 */
                isBaseProvider: false,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `dbom-landing`,
                short_name: `dbom-landing`,
                start_url: `/`,
                background_color: `#335599`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/dbom-icon.png`, // This path is relative to the root of the site.
            },
        },
    ],
}
