import BannerSlider from "./banner/BannerSlider";
import AdvertiseItems from "./advertiseItems/AdvertiseItems";
import TopBrands from "./topbrand/TopBrands";
import HotDealsOfTheDay from "./hotDeals/HotDealsOfTheDay";
import Categories from "./categories/Categories";



const Home = () => {


    return (
        <div>
           <BannerSlider></BannerSlider>
           <AdvertiseItems></AdvertiseItems>
           <Categories></Categories>
           
           <HotDealsOfTheDay></HotDealsOfTheDay>
           <TopBrands></TopBrands>
        </div>
    );
};

export default Home;