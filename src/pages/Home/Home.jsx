import BannerSlider from "./banner/BannerSlider";
import AdvertiseItems from "./advertiseItems/AdvertiseItems";
import TopBrands from "./topbrand/TopBrands";
import HotDealsOfTheDay from "./hotDeals/HotDealsOfTheDay";



const Home = () => {


    return (
        <div>
           <BannerSlider></BannerSlider>
           <AdvertiseItems></AdvertiseItems>
           <TopBrands></TopBrands>
           <HotDealsOfTheDay></HotDealsOfTheDay>
        </div>
    );
};

export default Home;