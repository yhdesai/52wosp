import Analytics from 'analytics'

// import fullStoryPlugin from '@analytics/fullstory'
// import googleTagManager from '@analytics/google-tag-manager'
import simpleAnalyticsPlugin from '@analytics/simple-analytics'

// import googleAnalytics from '@analytics/google-analytics'

/* Initialize analytics */
const analytics = Analytics({
    app: '52wosp',
    version: 100,
    plugins: [


        simpleAnalyticsPlugin(),

    ],
})

// function logPageViews() {
//     Router.events.on("routeChangeComplete", () => {
//         analytics.page()
//     });
// }

export { analytics }