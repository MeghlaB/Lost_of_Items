import React, { createContext, useState } from 'react'


export const AuthContext = createContext(null)


export default function AuthProvider({children}) {
  
  const [user,setUser] = useState(null)
  const userInfo ={
    name:'meghla'
  }



  return (
    <AuthContext.Provider value={userInfo}>
          {children}
    </AuthContext.Provider>
  )
}
