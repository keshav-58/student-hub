import { useContext,createContext,useState, useEffect } from "react"
import api from './axiosInstance.jsx'
import {Loader} from './Components/Loader.jsx'

const AuthContext=createContext()

export function AuthProvider({children}){
    const [user,setUser] = useState(null)
    const [isLoading,setLoading] = useState(true)

    useEffect(()=>{
        async function checkAuth(){
            try {
                const res = await api.get('/user')
                setUser(res.data.user)
            } catch (error) {
                setUser(null)
            }finally{
                setLoading(false)
            }
        }
        checkAuth()
    },[])
    if(isLoading){
        return (
            <Loader />
        )
    }
    return (
        <AuthContext.Provider value={{user,setUser,isLoading,isAuthenticated:!!user}}>
            {!isLoading && children}
        </AuthContext.Provider>
    )
    
}

export function useAuth(){
    return useContext(AuthContext)
}

