module.exports = {
  plugins: [
    {
      resolve: `@draftbox-co/gatsby-ghost-balsa-theme`,
      options: {
        siteConfig: {
          siteUrl: `https://ghost.theasdfghjkl.com`, // Site domain. Do not include a trailing slash!

          postsPerPage: 12, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

          siteTitleMeta: `Ghost Gatsby Starter`, // This allows an alternative site title for meta data for pages.
          siteDescriptionMeta: `A starter template to build amazing static websites with Ghost and Gatsby`, // This allows an alternative site description for meta data for pages.

          shareImageWidth: 1000, // Change to the width of your default share image
          shareImageHeight: 523, // Change to the height of your default share image

          shortTitle: `Ghost`, // Used for App manifest e.g. Mobile Home Screen
          siteIcon: `favicon.png`, // Logo in /static dir used for SEO, RSS, and App manifest
          backgroundColor: `#e9e9e9`, // Used for Offline Manifest
          themeColor: `#15171A`, // Used for Offline Manifest
          apiUrl: "https://ghost.theasdfghjkl.com",
          subscribeWidget: {
            title: "Subscribe to Built with Draftbox",
            helpText: "Get the latest posts delivered right to your inbox.",
            successMessage: "Thanks for subscribing to Built with Draftbox.",
          },
          footer: {
            copyright: "Built with Draftbox",
            navigation: [
              {
                label: "Home",
                url: "https://ghost.theasdfghjkl.com/",
              },
              {
                label: "Sitemap",
                url: "https://ghost.theasdfghjkl.com/sitemap.xml",
              },
              {
                label: "RSS",
                url: "https://ghost.theasdfghjkl.com/rss.xml",
              },
              {
                label: "Contact",
                url: "https://ghost.theasdfghjkl.com/contact",
              }
            ],
          },
          header: {
            navigation: [
              {
                label: "Home",
                url: "https://ghost.theasdfghjkl.com/",
              },
              {
                label: "Contact",
                url: "https://ghost.theasdfghjkl.com/contact",
              },
            ],
          },
          socialLinks: {
            twitter: "https://twitter.com/draftboxhq/",
            facebook: "https://www.facebook.com/draftboxhq/",
            instagram: "https://www.instagram.com/draftboxhq/",
            linkedin: "https://linkedin.com/draftboxhq/",
            github: "https://github.com/draftbox-co/",
          },
        },
        ghostConfig: {
          development: {
            apiUrl: "https://ghost.theasdfghjkl.com",
            contentApiKey: "3d17fad3efaa911df1ed577638",
            version: "v3",
          },
          production: {
            apiUrl: "https://ghost.theasdfghjkl.com",
            contentApiKey: "3d17fad3efaa911df1ed577638",
            version: "v3",
          },
        },
      },
    },
  ],
};
