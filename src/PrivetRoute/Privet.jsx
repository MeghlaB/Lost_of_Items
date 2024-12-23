
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { useContext } from 'react'


export default function PrivetRoute({children}) {
    const {user  , loading} = useContext(AuthContext)
    const location = useLocation()
    // (location)
    if(loading){
      return <div className="flex justify-center items-center h-40">
            <div className="spinner border-4 border-purple-600 border-t-transparent rounded-full w-10 h-10 animate-spin"></div>
          </div>
        
    }
    if(user && user?.email){
        return children
    }
  return (
    <Navigate state={location.pathname} to={'/login'}></Navigate>
  )
}