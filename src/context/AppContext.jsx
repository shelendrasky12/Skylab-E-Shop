import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {

    const navigate = useNavigate()
    const [user,setUser] =useState(null)
    const [IsSeller,setIsSeller] =useState(false)
    const [showUserLogin,setShowUserLogin] = useState(false)
    const value = { navigate, user, setUser, IsSeller, setIsSeller,showUserLogin, setShowUserLogin }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}


export const useAppContext = () => {
    return useContext(AppContext)
}