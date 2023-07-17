import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import DashboardHome from "../pages/dashboard/DashboardHome";
import DashboardLayout from "../layout/DashboardLayout";
import Blogs from "../pages/blogs/Blogs";
import AllSeller from "../pages/dashboard/admin/AllSeller";
import AllBuyers from "../pages/dashboard/admin/AllBuyers";
import ReportedItems from "../pages/dashboard/admin/ReportedItems";
import MyOrder from "../pages/dashboard/regularUser/MyOrder";
import AddProduct from "../pages/dashboard/seller/AddProduct";
import MyBuyers from "../pages/dashboard/seller/MyBuyers";
import MyProduct from "../pages/dashboard/seller/MyProduct";
import SignIn from "../shared/signIn/SignIn";
import PageNotFound from "../shared/PageNotFound";
import About from "../pages/about/About";



const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/usedProduct',
                element:<div>product</div>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/signIn',
                element:<SignIn></SignIn>
            },
            
        ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/dashboard',
                element:<DashboardHome></DashboardHome>
            },

            // admin route
            {
                path:'/dashboard/admin/allSellers',
                element:<AllSeller></AllSeller>
            },
        
            {
                path:'/dashboard/admin/allBuyers',
                element:<AllBuyers></AllBuyers>
            },
        
            {
                path:'/dashboard/admin/reportedItems',
                element:<ReportedItems></ReportedItems>
            },

            // regular user route 


            {
                path:'/dashboard/regular/myOrder',
                element:<MyOrder></MyOrder>
            },


            // serllers route 
            {
                path:'/dashboard/seller/addProduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/dashboard/seller/myBuyers',
                element:<MyBuyers></MyBuyers>
            },
            {
                path:'/dashboard/seller/myProduct',
                element:<MyProduct></MyProduct>
            },

        ]
    },
    {
        path:'*',
        element:<PageNotFound></PageNotFound>
    }
])
















const AllRoutes = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default AllRoutes;