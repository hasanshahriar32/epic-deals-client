import ItemsCard from "./ItemsCard";

const AdvertiseItems = () => {
    return (
       <div className="m-auto container py-36">

                <div className="max-w-xl lg:max-w-2xl">
                        <div className="max-w-xl mb-10 lg:max-w-2xl md:mb-12">
                        
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl ">
                        Experience the Future Today! <span className='text-amber-600'>Purchase </span> your choose product
                        </h2>
                       
                        </div>
                </div>

         <div className=" flex gap-5 flex-wrap">
            
            <ItemsCard></ItemsCard>
            <ItemsCard></ItemsCard>
            <ItemsCard></ItemsCard>
        </div>
       </div>
    );
};

export default AdvertiseItems;