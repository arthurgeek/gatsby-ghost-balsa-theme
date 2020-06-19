module.exports = {
  plugins: [
    {
      resolve: `@draftbox-co/gatsby-ghost-balsa-theme`,
      options: {
        siteConfig: {
          siteUrl: `https://ghost-balsa-preview.draftbox.co`, // Site domain. Do not include a trailing slash!

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
          header: {
            navigation: [
              {
                label: "Home",
                url: "https://ghost-balsa-preview.draftbox.co/",
              },
              {
                label: "Contact",
                url: "https://ghost-balsa-preview.draftbox.co/contact",
              },
            ],
          },
          footer: {
            copyright: "Built with Draftbox122",
            navigation: [
              {
                label: "Home",
                url: "https://ghost-balsa-preview.draftbox.co/",
              },
              {
                label: "Sitemap",
                url: "https://ghost-balsa-preview.draftbox.co/sitemap.xml",
              },
              {
                label: "RSS",
                url: "https://ghost-balsa-preview.draftbox.co/rss",
              },
              {
                label: "Contact",
                url: "https://ghost-balsa-preview.draftbox.co/contact",
              },
              {
                label: "External Link",
                url: "https://spectrum.chat/gatsby-js/themes?tab=posts",
              },
            ],
          },
          subscribeWidget: {
            title: "Subscribe to Draftbox [new]",
            helpText: "Get the latest posts delivered right to your inbox.",
            successMessage: "Thanks for subscribing to Built with Draftbox.",
          },
          socialLinks: {
            twitter: "https://twitter.com/draftboxhq",
            facebook: "https://facebook.com/",
            instagram: "https://www.instagram.com/",
            linkedin: "https://linkedin.com",
            github: "https://github.com/draftbox-co",
          },
          contactWidget: {
            title: "Contact Built with Draftbox",
            successMessage: "We’ll get in touch with you soon.",
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
