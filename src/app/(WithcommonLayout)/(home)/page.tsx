import Banner from "@/components/modules/home/Banner";
import Overview from "@/components/modules/home/Overview";
import Reviews from "@/components/modules/home/Reviews";
// import SearchBar from "@/components/modules/home/SearchBar";

const HomePage = () => {
  return (
    <div>
      <Banner />
      {/* <SearchBar /> */}
      <div className="container mx-auto">
        <Overview />
      </div>
      <Reviews />
    </div>
  );
};

export default HomePage;
