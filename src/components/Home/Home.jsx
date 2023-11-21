import Banner from "../Banner/Banner";
import Condition from "../Condition/Condition";
import DiverTeams from "../DiverTeams/DiverTeams";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import OurDoctor from "../OurDoctor/OurDoctor";
import Rectangle from "../Rectangle/Rectangle";
import Subscribe from "../Subscribe/Subscribe";


const Home = () => {
    return (
        <div className="bg-[#FFF]">
            <div className="w-[80%] mx-auto"><Navbar></Navbar></div>
            <Banner></Banner>
            <div className="w-[90%] mx-auto">
                <Condition></Condition>
            </div>
            <Rectangle></Rectangle>
            <DiverTeams></DiverTeams>
            <div className="w-[90%] mx-auto">
            <OurDoctor></OurDoctor>
            </div>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;