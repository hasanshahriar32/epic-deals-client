import { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../context/AuthContextElements';
import BigSpinner from '../../../components/BigSpinner';
import { AiOutlineDelete } from 'react-icons/ai';

const MyProduct = () => {


    const {user}= useContext(AuthContext)

    const { data=[],isLoading }=useQuery({
        queryKey:[user?.email],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/sellingProduct?email=${user?.email}`)
            const data = res.json()
            return data
        }    
    })
    const sellingProduct = data?.data;


    // this product will add to advertise 
    const addtoAdvertise = () =>{
        alert('coming soon')
    }




    if(isLoading){
        return <BigSpinner></BigSpinner>
    }
    return (
        <div>
             <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">All of my <span className="text-amber-500">Products</span></h1>
            {/* table  */}
            <div>
                <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className='text-amber-600 font-semibold'>
                        
                        <th>Product name</th>
                        <th>Conditin</th>
                        <th>Price</th>
                        <th>Details</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    {/* body */}
                    <tbody>


                    {

                        sellingProduct && 
                                <>
                                {
                                    sellingProduct?.map(product => 
                                        <tr key={product._id}>
                                    
                                        <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.productPhoto} alt="productPhoto" />
                                            </div>
                                            </div>
                                            
                                            <div className="font-bold">{product.productName}</div>
                                            
                                        </div>
                                        </td>

                                        <td>{product.productCondition}</td>

                                        <td>TK: {product.price}</td>

                                        <td>
                                        {product.productDetails}
                                        <br/>
                                        <span className="badge badge-ghost badge-sm">{product.productDetails}</span>
                                        </td>

                                        <td>
                                            <button className='btn btn-xs text-red-500'><AiOutlineDelete/></button>
                                            <button onClick={()=>addtoAdvertise()} className='btn btn-xs  '>add to advertise</button>
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

export default MyProduct;