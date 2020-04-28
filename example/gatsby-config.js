module.exports = {
  plugins: [
    {
      resolve: `@armada-inc/gatsby-theme-ghost-attila`,
      options: {
        siteConfig: {
          siteUrl: `https://blog.getarmada.app`, // Site domain. Do not include a trailing slash!

          postsPerPage: 12, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

          siteTitleMeta: `Ghost Gatsby Starter`, // This allows an alternative site title for meta data for pages.
          siteDescriptionMeta: `A starter template to build amazing static websites with Ghost and Gatsby`, // This allows an alternative site description for meta data for pages.

          shareImageWidth: 1000, // Change to the width of your default share image
          shareImageHeight: 523, // Change to the height of your default share image

          shortTitle: `Ghost`, // Used for App manifest e.g. Mobile Home Screen
          siteIcon: `favicon.png`, // Logo in /static dir used for SEO, RSS, and App manifest
          backgroundColor: `#e9e9e9`, // Used for Offline Manifest
          themeColor: `#15171A` // Used for Offline Manifest
        },
        ghostConfig: {
          development: {
            apiUrl: "https://blog.getarmada.app",
            contentApiKey: "6eca800ace9ef5c58736c65b13",
            version: "v2"
          },
          production: {
            apiUrl: "https://blog.getarmada.app",
            contentApiKey: "6eca800ace9ef5c58736c65b13",
            version: "v2"
          }
        }
      }
    }
  ]
};
