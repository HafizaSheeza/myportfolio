import Herosection from "./Component/Herosection";
import Contact from "./Contact";
import Projects from "./Projects";
import Service from "./Service";
const Home = () => {
    const data = {
        name: "Sheeza Nawaz",
        image: "./Images/onback.png"
    }
    return (<>
        <Herosection {...data} />
        <Service />
        <Projects />
        <Contact />
    </>)
}
export default Home;