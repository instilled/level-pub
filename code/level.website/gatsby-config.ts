import type {GatsbyConfig} from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Level - AI Assistant`,
        siteUrl: `https://levelai.app`
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-postcss",
        // {
        //     resolve: "gatsby-plugin-google-gtag",
        //     options: {
        //         trackingIds: ["G-FHJRGSGRNJ"],
        //     }
        // },
        {
            resolve: `@mobile-reality/gatsby-plugin-gdpr-cookies`,
            options: {
                googleConsent: {
                    analyticsStorage: "level-analytics-ga-consent",
                    waitForUpdate: 500
                },
                googleAnalytics: {
                    trackingId: 'G-FHJRGSGRNJ', // leave empty if you want to disable the tracker
                    cookieName: 'level-analytics-ga', // default
                    anonymize: true, // default
                    allowAdFeatures: false // default
                },
                googleTag: {
                    trackingIds: ['G-FHJRGSGRNJ'],
                    cookieName: 'level-analytics-gt'
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Level - AI Assistant`,
                short_name: `Level`,
                start_url: `/`,
                background_color: `#000000`,
                theme_color: `#000000`,
                display: `standalone`,
                icon: 'src/images/icon.png'
            },
        },]
};

export default config;
