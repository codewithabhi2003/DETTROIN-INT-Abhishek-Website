import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

/**
 * Mocked session state. Real authentication happens on the external
 * ERP / email / Google systems linked from pages/Auth/Login.jsx — this
 * only tracks lightweight UI state, e.g. whether a signed-in parent
 * should see private fields on components like PublicProfile.
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(null) // 'teacher' | 'student' | 'parent' | null

  const signIn = (nextUser, nextRole) => {
    setUser(nextUser)
    setRole(nextRole)
  }

  const signOut = () => {
    setUser(null)
    setRole(null)
  }

  const value = { user, role, isAuthenticated: Boolean(user), signIn, signOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}