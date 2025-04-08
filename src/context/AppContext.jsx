import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";


export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {

    const navigate = useNavigate()
    const [user,setUser] =useState(null)
    const [IsSeller,setIsSeller] =useState(false)
    const [showUserLogin,setShowUserLogin] = useState(false)
    const [products,setProducts] =useState([])
    const [cartItems,setCartItems] = useState({})
    
    //fetch products from dummy data
    const fetchProducts = async () => {
        setProducts(dummyProducts)
    }

    //Add product to cart
    const addToCart =  (itemId) => {
        let cartData = structuredClone(cartItems)
        if(cartData[itemId]){
            cartData[itemId] += 1
        }else{
            cartData[itemId] = 1
        }

        setCartItems(cartData)
        toast.success("Item added to cart") 
    }

    //update cart items quantity
    const updatecartItem = (itemId,quantity) => {
        cartData[itemId] = quantity
        setCartItems(cartData)
        toast.success("Item quantity updated")

    }

    //remove cart item
    const removeCartItem = (itemId) => {
        let cartData = structuredClone(cartItems)
        if(cartData[itemId]){
            cartData[itemId] -= 1;
            if(cartData[itemId] === 0){
                delete cartData[itemId]
            }
        }
        toast.success("Item removed from cart")
        setCartItems(cartData)
    }

    useEffect(() => {
        fetchProducts()
    },[])

    // const currency = import.meta.env.VITE.CURRENCY

    const value = { navigate, user, setUser, IsSeller, setIsSeller,showUserLogin, setShowUserLogin,products,cartItems,addToCart,updatecartItem,removeCartItem}

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}


export const useAppContext = () => {
    return useContext(AppContext)
}