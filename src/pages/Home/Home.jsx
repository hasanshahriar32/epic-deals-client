import BannerSlider from "./banner/BannerSlider";
import TopBrands from "./topbrand/TopBrands";
import HotDealsOfTheDay from "./hotDeals/HotDealsOfTheDay";
import Categories from "./categories/Categories";
import FeaturedItem from "./advertiseItems/FeaturedItem";



const Home = () => {


    return (
        <div>
           <BannerSlider></BannerSlider>
           <FeaturedItem></FeaturedItem>
           <Categories></Categories>
           <HotDealsOfTheDay></HotDealsOfTheDay>
           <TopBrands></TopBrands>
        </div>
    );
};

export default Home;