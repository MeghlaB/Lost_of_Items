import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { useNavigate } from 'react-router-dom'



export const axiosSecure = axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    withCredentials:true
})
export default function UserAxiosSecure() {
    const navigate = useNavigate()
    const {logout} = useContext(AuthContext)
useEffect(()=>{
    axiosSecure.interceptors.response.use(
        res=>{
            return res
        },
        async error=>{
            console.log('error caught from our very axios interceptors--->',error.response)
           if(error.response.status === 401 || error.response.status === 403){
            // logout
            logout()
            // Navigate to from
            navigate('/login')
            
           }
        }
     )
},[])
return axiosSecure
}
