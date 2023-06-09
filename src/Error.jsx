import { NavLink } from "react-router-dom";
import styled from "styled-components";
import error from "./Images/error.png";
import { Button } from "./Styles/Button";
const Error = () => {
    return (<>
        <Wrapper>
            <img src={error} alt="" />
            <NavLink to='/'>
                <Button className="btns">Go Back</Button>
            </NavLink>
        </Wrapper>
    </>)
}
const Wrapper = styled.section`
padding:3rem 0;
img{
    max-width:40%;
    margin:auto;
    text-align:center;
    display:flex;
    justify-content:center;
}
.btns{
       display:flex;
       justify-content:center;
       align-items:center;
       margin:1rem auto;
}
`
export default Error;