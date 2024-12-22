import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/Firebase_init'


export const AuthContext = createContext(null)


export default function AuthProvider({children}) {
  
  const [user,setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    const creatUser = (email,passWord)=>{
        setLoading (true)
        return createUserWithEmailAndPassword(auth,email,passWord)
    }

    const loginuser = (email,passWord)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,passWord)
    }
    
    const UpdateProfile = (updateData)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,updateData)
      }

      const GoogleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth ,Provider)
      }

      const logout =()=>{
        setLoading(true)
        return signOut(auth)
      }

    useEffect(()=>{
        const Unsubscribed  = onAuthStateChanged(auth,(currentUser)=>{
          setUser(currentUser)
          setLoading(false)
        })
          return ()=>[
            Unsubscribed()
          ]
      },[])












  const userInfo ={
    user,
    loading,
    setUser,
    setLoading,
    creatUser,
    loginuser,
    GoogleLogin,
    logout,
    UpdateProfile 
  }



  return (
    <AuthContext.Provider value={userInfo}>
          {children}
    </AuthContext.Provider>
  )
}
