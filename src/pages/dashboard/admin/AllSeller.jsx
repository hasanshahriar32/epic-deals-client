;
import { useQuery } from "react-query";
import BigSpinner from "../../../components/BigSpinner";

import { AiOutlineDelete } from 'react-icons/ai';


const AllSeller = () => {

    const sellerURL = 'http://localhost:5000/typeOfUser?type=Seller'

    const { data=[],isLoading }=useQuery({
        queryKey:[sellerURL],
        queryFn: async() => {
            const res = await fetch(sellerURL)
            const data = res.json()
            return data
        }    
    })
    const allSeller = data?.data;

    console.log(allSeller);


    // this product will add to advertise 
    const verifySeller = () =>{
        alert('coming soon')
    }




    if(isLoading){
        return <BigSpinner></BigSpinner>
    }

    return (
              <div>
             <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">All of my <span className="text-amber-500">Sellers</span></h1>
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

                            allSeller && 
                                <>
                                {
                                    allSeller?.map(seller => 
                                        <tr key={seller._id}>
                                    
                                        <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={seller.uploadedPhotoURL} alt="productPhoto" />
                                            </div>
                                            </div>
                                            
                                            <div className="font-bold">{seller.userName}</div>
                                            
                                        </div>
                                        </td>

                                        <td>{seller.email}</td>

                                        <td className="text-amber-500">{seller.userType}</td>

                                       
                                        <td>
                                            <button className='btn btn-xs text-red-500 text-xl'><AiOutlineDelete/></button> 
                                            <button onClick={()=>verifySeller()} className='btn btn-xs text-blue-500'>
                                                verify user
                                            </button>
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

export default AllSeller;