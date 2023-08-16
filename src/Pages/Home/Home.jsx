import Class from "./Class/Class";
import Extraction from "./ExtraSection/Extraction";
import Instructor from "./Instructor/Instructor";
import Slider from "./Slider/Slider";

const Home = () => {

    return (
        <div>
           <Slider></Slider>
           <Class></Class>
           <Instructor></Instructor>
           <Extraction></Extraction>
        </div>
    );
};

export default Home;