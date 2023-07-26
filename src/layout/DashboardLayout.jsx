
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import useUserType from '../hooks/useUserType';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContextElements';
import BigSpinner from '../components/BigSpinner';

const DashboardLayout = () => {

    const {user}=useContext(AuthContext)

    const [userType,loading] = useUserType(user?.email)

    if(loading){
        return <BigSpinner></BigSpinner>
    }

    return (
        <div>
             <Navbar></Navbar>
            <div className="drawer bg-orange-50 lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Page content here */}
                   
                    <Outlet></Outlet>



                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 h-full bg-base-200  text-amber-600 font-semiboldP">
                    {/* Sidebar content here */}
                    {/* <li><a>Sidebar Item 1</a></li> */}
                    {
                        userType === 'Seller' && <>
                                <li><Link to='/dashboard/seller/myProduct'>My Products</Link></li>
                                <li><Link to='/dashboard/seller/myBuyers'>My Buyers</Link></li>
                                <li><Link to='/dashboard/seller/addProduct'>Add A Product</Link></li>
                        </>
                    }
                    {
                        userType === 'Admin' && <>
                                <li><Link to='/dashboard/admin/allSellers'>All seller</Link></li>
                                <li><Link to='/dashboard/admin/allBuyers'>All buyer</Link></li>
                                <li><Link to='/dashboard/admin/reportedItems'>Reported Items</Link></li>
                        </>
                    }
                    {
                        userType === 'Buyer' && <>
                                <li><Link to='/dashboard/regular/myOrder'>My Order</Link></li>
                        </>
                    }


                        <li><Link to='/dashboard/userProfile'>My Profile</Link></li>






                    </ul>
                
                </div>
            </div>
            
        </div>
    );
};

export default DashboardLayout;