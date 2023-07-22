import { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../context/AuthContextElements';

const MyProduct = () => {


    const {user}= useContext(AuthContext)
    // console.log(user);

    const { data=[],isLoading }=useQuery({
        queryKey:['user'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/sellingProduct?email=${user?.email}`)
            const data = res.json()
            return data
        }    
    })
    const sellingProduct = data.data


    
    return (
        <div>
            <h1>here can some title</h1>
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
                            <button className='btn btn-xs'>delete</button>
                        </td>
                    </tr>
                    )
                }


                


            
                    </tbody>
            
                    
                </table>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;