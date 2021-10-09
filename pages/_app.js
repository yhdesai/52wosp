import 'tailwindcss/tailwind.css'
import { AnalyticsProvider } from 'use-analytics'
import { analytics } from '../utils/analytics'

function MyApp({ Component, pageProps }) {
  return(
  <AnalyticsProvider instance={analytics}>
    <Component {...pageProps} />
    </AnalyticsProvider>)
}

export default MyApp
