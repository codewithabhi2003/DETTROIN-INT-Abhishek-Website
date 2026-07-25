import { AuthProvider, NavProvider, ChatbotProvider } from '@/context'

export default function AppProviders({ children }) {
  return (
    <AuthProvider>
      <NavProvider>
        <ChatbotProvider>{children}</ChatbotProvider>
      </NavProvider>
    </AuthProvider>
  )
}