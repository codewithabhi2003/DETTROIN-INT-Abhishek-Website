import { HelmetProvider } from 'react-helmet-async'
import AppProviders from './providers/AppProviders'
import AppRouter from './routes/AppRouter'

export default function App() {
  return (
    <HelmetProvider>
      <AppProviders>
        <AppRouter />
      </AppProviders>
    </HelmetProvider>
  )
}