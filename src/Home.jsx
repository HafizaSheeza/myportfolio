import Herosection from "./Component/Herosection";
import Contact from "./Contact";
import Service from "./Service";
const Home = () => {
    const data = {
        name: "Sheeza Nawaz",
        image: "./Images/onback.png"
    }
    return (<>
        <Herosection {...data} />
        <Service />
        <Contact />
    </>)
}
export default Home;