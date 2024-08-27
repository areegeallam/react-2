import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'
import Categery from './Components/Categery/Categery'
import Product from './Components/Product/Product'
import Brand from './Components/Brand/Brand'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Logout from './Components/Logout/Logout'
import Notfound from './Components/NotFound/Notfound'
import ProtectRoutes from './Components/ProtectedRoutes/Prote/ProtectRoutes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ProductDetails from './Components/ProductsDetails/ProductDetails'
import { Toaster } from 'react-hot-toast'
import Address from './Components/Address/Address'


export default function hello() {
  const queryClient = new QueryClient()


  let routers = createBrowserRouter([{
    path:"",element:<Layout/>,children:[
      {index:true,element:<ProtectRoutes><Home/></ProtectRoutes> },
      {path:"Login",element:<Login/>},
      {path:"Register",element:<Register/>},
      {path:"logout",element:<Logout/>},
      {path:"Cart",element:<ProtectRoutes> <Cart/> </ProtectRoutes> },
      {path:"Categery",element:<ProtectRoutes><Categery/></ProtectRoutes> },
      {path:"Product",element:<ProtectRoutes><Product/></ProtectRoutes>},
      {path:"Brand",element:<ProtectRoutes><Brand/></ProtectRoutes> },
      {path:"productsdetails/:id",element:<ProtectRoutes><ProductDetails/></ProtectRoutes> },
      {path:"Address",element:<Address/>},
      {path:"*",element:<Notfound/>}

    ]
  }])
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={routers}></RouterProvider>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    <Toaster/>
    </>
  )
}
