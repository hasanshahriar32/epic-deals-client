import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const SingleProductCard =({product}) => {
    console.log(product);
    return (
     
               <div className="flex flex-col shadow-xl">
                    <img alt="" className="object-cover w-full h-60" src={product.productPhoto} />
            
                <div className="flex flex-col flex-1 p-6">
                
                    <span className="text-xs tracki">Rating: 5.0 <AiOutlineStar className="inline"></AiOutlineStar></span>
                    <h3 className="flex-1 py-2 text-lg font-semibold leadi">{product.productName}</h3>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs">
                        <span className="text-amber-600">Price : {product.price}</span>
                        <button className="btn btn-xs"><Link>Details</Link></button>
                    </div>
                </div>
            </div>
       
    );
};

export default SingleProductCard;