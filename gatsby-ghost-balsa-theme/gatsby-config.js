const path = require(`path`);

const siteConfigDefaults = require(`./src/utils/siteConfig`);
const ghostConfigDefaults = require(`./src/utils/.ghost.json`);

const generateRSSFeed = require(`./src/utils/rss/generate-feed`);

module.exports = (themeOptions) => {
  const siteConfig = themeOptions.siteConfig || siteConfigDefaults;
  const ghostConfig = themeOptions.ghostConfig || ghostConfigDefaults;

  return {
    siteMetadata: siteConfig,
    plugins: [
      `gatsby-plugin-typescript`,
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: path.join(__dirname, `src`, `pages`),
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: path.join(__dirname, `src`, `images`),
          name: `images`,
        },
      },
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-source-ghost`,
        options:
          process.env.NODE_ENV === `development`
            ? ghostConfig.development
            : ghostConfig.production,
      },
      {
        resolve: `gatsby-transformer-rehype`,
        options: {
          filter: (node) =>
            node.internal.type === `GhostPost` ||
            node.internal.type === `GhostPage`,
          plugins: [
            {
              resolve: `gatsby-rehype-prismjs`,
            },
            {
              resolve: `gatsby-rehype-ghost-links`,
            },
          ],
        },
      },
      /**
       *  Utility Plugins
       */
      {
        resolve: require.resolve(`./plugins/gatsby-plugin-ghost-manifest`),
        options: {
          short_name: siteConfig.shortTitle,
          start_url: `/`,
          background_color: siteConfig.backgroundColor,
          theme_color: siteConfig.themeColor,
          display: `minimal-ui`,
          icon: `static/${siteConfig.siteIcon}`,
          legacy: true,
          query: `{
            allGhostSettings {
              edges {
                node {
                  title
                  description
                }
              }
            }
          }`,
        },
      },
      {
        resolve: `gatsby-plugin-feed`,
        options: {
          query: `{
            allGhostSettings {
              edges {
                node {
                  title
                  description
                }
              }
            }
          }`,
          feeds: [generateRSSFeed(siteConfig)],
        },
      },
      {
        resolve: `gatsby-plugin-advanced-sitemap`,
        options: {
          query: `{
            allGhostPost {
              edges {
                node {
                  id
                  slug
                  updated_at
                  created_at
                  feature_image
                }
              }
            }
            allGhostPage {
              edges {
                node {
                  id
                  slug
                  updated_at
                  created_at
                  feature_image
                }
              }
            }
            allGhostTag {
              edges {
                node {
                  id
                  slug
                  feature_image
                }
              }
            }
            allGhostAuthor {
              edges {
                node {
                  id
                  slug
                  profile_image
                }
              }
            }
          }
          `,
          mapping: {
            allGhostPost: {
              sitemap: `posts`,
            },
            allGhostTag: {
              sitemap: `tags`,
            },
            allGhostAuthor: {
              sitemap: `authors`,
            },
            allGhostPage: {
              sitemap: `pages`,
            },
          },
          exclude: [
            `/dev-404-page`,
            `/404`,
            `/404.html`,
            `/offline-plugin-app-shell-fallback`,
          ],
          createLinkInHead: true,
          addUncaughtPages: true,
        },
      },
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-force-trailing-slashes`,
      `gatsby-plugin-offline`,
      `gatsby-plugin-postcss`,
      {
        resolve: `gatsby-plugin-purgecss`,
        options: {
          printRejected: true, // Print removed selectors and processed file names
          // develop: true, // Enable while using `gatsby develop`
          tailwind: true, // Enable tailwindcss support
          ignore: ["/ignored.css", "prismjs/", "docsearch.js/"],
          purgeOnly: ["components/", "styles/"],
          content: [
            path.join(
              __dirname,
              "src/**/!(*.d).{ts,js,jsx,tsx}"
            ),
          ],
        },
      },
      {
        resolve: `@armada-inc/gatsby-plugin-amp`,
        options: {
          canonicalBaseUrl: siteConfig.siteUrl,
          components: [`amp-form`],
          excludedPaths: [`/404*`, `/`],
          pathIdentifier: `amp/`,
          relAmpHtmlPattern: `{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}`,
          useAmpClientIdApi: true,
          dirName: __dirname,
          themePath: `src/amp-styles/post.amp.css`,
        },
      },
    ],
  };
};
