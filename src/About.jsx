import Herosection from "./Component/Herosection";

const About = () => {
    const data = {
        name: "Web Developer",
        image: "./Images/back.png"
    }
    return (<>
        <Herosection {...data} /></>)
}
export default About;