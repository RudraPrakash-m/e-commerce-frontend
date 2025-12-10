import React from 'react'
import "./index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layout/appLayout'
import Home from './pages/home/Home'
import Deals from './pages/deals/Deals'
import Men from './pages/categories/Men'
import Women from './pages/categories/Women'
import Electronics from './pages/categories/Electronics'
import HomeAppliences from './pages/categories/HomeAppliences'
import Wishlist from './pages/wishlist/Wishlist'
import Cart from './pages/cart/Cart'
import AllItems from './context/AllItems'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import { UserProvider } from './context/UserProvider'

const App = () => {

    const routes = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout/>,
            children:[
                {
                    path:"/",
                    element:<Home/>
                },
                {
                    path:"/deals",
                    element:<Deals/>
                },
                {
                    path:"/cat/men",
                    element:<Men/>
                },
                {
                    path:"/cat/women",
                    element:<Women/>
                },
                {
                    path:"/cat/electronics",
                    element:<Electronics/>
                },
                {
                    path:"/cat/home",
                    element:<HomeAppliences/>
                },
                {
                    path:"/wishlist",
                    element:<Wishlist/>
                },
                {
                    path:"/cart",
                    element:<Cart/>
                }
            ]
        }
    ])

  return (
    <UserProvider>
        <AllItems>
            <CartProvider>
                <WishlistProvider>

                <RouterProvider router={routes}></RouterProvider>
                </WishlistProvider>
            </CartProvider>
        </AllItems>
    </UserProvider>
  )
}

export default App