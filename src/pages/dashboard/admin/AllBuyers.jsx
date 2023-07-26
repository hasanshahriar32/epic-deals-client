
import { useQuery } from "react-query";
import BigSpinner from "../../../components/BigSpinner";

import { AiOutlineDelete } from 'react-icons/ai';



const AllBuyers = () => {

    const buyerURL = 'http://localhost:5000/typeOfUser?type=Buyer'

    const { data=[],isLoading }=useQuery({
        queryKey:[buyerURL],
        queryFn: async() => {
            const res = await fetch(buyerURL)
            const data = res.json()
            return data
        }    
    })
    const allbuyer = data?.data;

    console.log(allbuyer);





    if(isLoading){
        return <BigSpinner></BigSpinner>
    }

    return (
        <div>
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">All of my <span className="text-amber-500">Buyers</span></h1>
       {/* table  */}
       <div>
           <div className="overflow-x-auto">
           <table className="table">
               {/* head */}
               <thead>
               <tr className='text-amber-600 font-semibold'>
                   
                   <th>Name</th>
                   <th>Email</th>
                   <th>Type</th>
                   <th>Action</th>
               </tr>
               </thead>

               {/* body */}
               <tbody>


               {

                       allbuyer && 
                           <>
                           {
                               allbuyer?.map(buyer => 
                                   <tr key={buyer._id}>
                               
                                   <td>
                                   <div className="flex items-center space-x-3">
                                       <div className="avatar">
                                       <div className="mask mask-squircle w-12 h-12">
                                           <img src={buyer.uploadedPhotoURL} alt="productPhoto" />
                                       </div>
                                       </div>
                                       
                                       <div className="font-bold">{buyer.userName}</div>
                                       
                                   </div>
                                   </td>

                                   <td>{buyer.email}</td>

                                   <td className="text-amber-500">{buyer.userType}</td>

                                  
                                   <td>
                                       <button className='btn btn-xs text-red-500 text-xl'><AiOutlineDelete/></button> 
                                       
                                   </td>
                               </tr>
                               )
                           }
                           </>
               }


           


       
               </tbody>
       
               
           </table>
           </div>
       </div>
   </div>
    );
};

export default AllBuyers;