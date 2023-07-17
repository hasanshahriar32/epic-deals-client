import ItemsCard from "./ItemsCard";

const AdvertiseItems = () => {
    return (
       <div className="m-auto container py-36">

                <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        Experience the Future Today! <span className='text-amber-600'>Purchase </span> your choose product
                        </h2>
                        <p className="text-sm text-gray-400">
                        This blog focuses on providing comprehensive insights into fundamental programming concepts. It covers topics such as variables, data types, control structures, functions, and object-oriented programming. 
                        </p>
                        </div>
                    </div>

         <div className=" flex gap-5">
            
            <ItemsCard></ItemsCard>
            <ItemsCard></ItemsCard>
            <ItemsCard></ItemsCard>
        </div>
       </div>
    );
};

export default AdvertiseItems;