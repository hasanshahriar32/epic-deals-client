import SingleItem from "./SingleItem";

const HotDealsOfTheDay = () => {
  
    return (
          <div className=" bg-zinc-200"> 
             <div className="container m-auto py-16">

                <h2 className="max-w-lg my-12 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl "> 
                Hot <span className='text-amber-600'>Deals</span> For Today
                </h2>

             <div className="flex flex-wrap gap-4">
                <SingleItem></SingleItem>
                <SingleItem></SingleItem>
                <SingleItem></SingleItem>
                <SingleItem></SingleItem>
            </div>
           </div>
          </div>
    );
};

export default HotDealsOfTheDay;