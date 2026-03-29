import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

// TODO: 串接 API 後改為真實登入邏輯
export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: '王小明',
    email: 'xiaoming@example.com',
    birthday: '1995-06-15',
  })

  const isLoggedIn = !!user

  const login = (userData) => setUser(userData)
  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
