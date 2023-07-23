import SingleItem from "./SingleItem";
import Slider from "react-slick";


const HotDealsOfTheDay = () => {
  
      const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 5000,
        cssEase: "linear"
      };




  
    return (
          <div className=" bg-zinc-200"> 
             <div className="container m-auto py-16">

                <h2 className="max-w-lg my-12 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl "> 
                Hot <span className='text-amber-600'>Deals</span> For Today
                </h2>

             <div className="">
               
                <Slider {...settings}>
                  
                  <div><SingleItem></SingleItem></div>
                  <div><SingleItem></SingleItem></div>
                  <div><SingleItem></SingleItem></div>
                  <div><SingleItem></SingleItem></div>
                  <div><SingleItem></SingleItem></div>
                  <div><SingleItem></SingleItem></div>
                  <div><SingleItem></SingleItem></div>
                  <div><SingleItem></SingleItem></div>
                  <div><SingleItem></SingleItem></div>
                  <div><SingleItem></SingleItem></div>
                  <div><SingleItem></SingleItem></div>
                
               </Slider>
             
            </div>
           </div>
          </div>
    );
};

export default HotDealsOfTheDay;